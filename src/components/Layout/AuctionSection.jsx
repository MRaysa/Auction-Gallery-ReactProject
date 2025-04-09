import React, { useEffect, useState } from "react";
import ActiveAuctions from "./ActiveAuctions";
import FavoritesSection from "./FavoritesSection";
const AuctionSection = () => {
  const [auctionItems, setAuctionItems] = useState([]);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        console.log(data);
        console.log(data.auctionItems);
        setAuctionItems(data.AuctionSection);
      } catch (error) {
        console.error("Error fatchs of data", error);
      }
    };
    fetchData();
  }, []);

  // if (loading)
  //   return <div className="text-center py-8">Loading auction..........</div>;
  // console.log(auctionItems[0]?.description);
  return (
    <div>
      <section className="p-4 mx-auto md:pt-6 md:pl-28 md:pr-28 md:pb-28 bg-[#ebf0f5]">
        {/* Main Content */}
        <div className="mt-4 mb-b">
          <h1 className="text-2xl text-gray-800">Active Auction</h1>
          <p className="text-gray-600">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[70%]">
            <ActiveAuctions></ActiveAuctions>
          </div>
          <div className="w-[30%]">
            <FavoritesSection></FavoritesSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuctionSection;
