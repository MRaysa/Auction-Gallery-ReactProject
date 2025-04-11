// src/components/CandlestickChart/CandyCandlestickChart.jsx
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const CandyCandlestickChart = ({
  itemId,
  priceHistory = [],
  width = "100%",
  height = 160,
}) => {
  const svgRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    if (!priceHistory || priceHistory.length === 0 || !containerRef.current)
      return;

    const containerWidth = containerRef.current.clientWidth;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartWidth = containerWidth - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Clear previous chart
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    svg.attr("width", containerWidth).attr("height", height);

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add gradient background
    const defs = svg.append("defs");
    const gradient = defs
      .append("linearGradient")
      .attr("id", `gradient-${itemId}`)
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%");

    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#FFF5F7");
    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#F0F9FF");

    chart
      .append("rect")
      .attr("width", chartWidth)
      .attr("height", chartHeight)
      .attr("rx", 8)
      .attr("fill", `url(#gradient-${itemId})`);

    // Add sparkle effect
    for (let i = 0; i < 15; i++) {
      chart
        .append("circle")
        .attr("cx", Math.random() * chartWidth)
        .attr("cy", Math.random() * chartHeight)
        .attr("r", Math.random() * 1.5 + 0.5)
        .attr("fill", "#FFD6E8")
        .attr("opacity", 0.6);
    }

    // Create scales
    const x = d3
      .scaleBand()
      .domain(priceHistory.map((_, i) => i))
      .range([0, chartWidth])
      .padding(0.3);

    const y = d3
      .scaleLinear()
      .domain([
        d3.min(priceHistory, (d) => d.low) * 0.95,
        d3.max(priceHistory, (d) => d.high) * 1.05,
      ])
      .range([chartHeight, 0])
      .nice();

    // Draw candlesticks
    priceHistory.forEach((d, i) => {
      const isUp = d.close > d.open;
      const color = isUp ? "#4FD1C5" : "#F56565";
      const stickWidth = x.bandwidth() * 0.6;

      // Wick
      chart
        .append("line")
        .attr("x1", x(i) + x.bandwidth() / 2)
        .attr("x2", x(i) + x.bandwidth() / 2)
        .attr("y1", y(d.high))
        .attr("y2", y(d.low))
        .attr("stroke", color)
        .attr("stroke-width", 2);

      // Body
      chart
        .append("rect")
        .attr("x", x(i) + (x.bandwidth() - stickWidth) / 2)
        .attr("y", y(Math.max(d.open, d.close)))
        .attr("width", stickWidth)
        .attr("height", Math.abs(y(d.open) - y(d.close)))
        .attr("rx", 4)
        .attr("fill", color)
        .attr("stroke", "white")
        .attr("stroke-width", 1.5);

      // Lollipop ends
      chart
        .append("circle")
        .attr("cx", x(i) + x.bandwidth() / 2)
        .attr("cy", y(d.high))
        .attr("r", 4)
        .attr("fill", "white")
        .attr("stroke", color)
        .attr("stroke-width", 2);

      chart
        .append("circle")
        .attr("cx", x(i) + x.bandwidth() / 2)
        .attr("cy", y(d.low))
        .attr("r", 4)
        .attr("fill", "white")
        .attr("stroke", color)
        .attr("stroke-width", 2);
    });

    // Add axes
    chart
      .append("g")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(d3.axisBottom(x).tickFormat("").tickSize(0));

    chart
      .append("g")
      .call(d3.axisLeft(y).ticks(4).tickSize(0))
      .selectAll("text")
      .attr("font-size", "10px")
      .attr("fill", "#888");
  }, [priceHistory, height, itemId]);

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <svg ref={svgRef} className="w-full h-full" />
      <div className="absolute top-2 right-2 flex space-x-1">
        {["🍬", "🍭", "🍫"].map((candy, i) => (
          <span
            key={i}
            className="text-xs opacity-70 hover:scale-125 transition-transform"
            style={{ transform: `rotate(${i * 15}deg)` }}
          >
            {candy}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CandyCandlestickChart;
