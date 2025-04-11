import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ActiveAuctions from "./ActiveAuctions";
import FavoritesSection from "./FavoritesSection";
import CandlestickSection from "../CandlestickChart/CandlestickSection";
import Modal from "../Common/Modal"; // Make sure to create this component

const AuctionSection = () => {
  const [auctionItems, setAuctionItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favoritedIds, setFavoritedIds] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setAuctionItems(data.auctionItems);
        setChartData(data.auctionItems.filter((item) => item.priceHistory));
      } catch (err) {
        console.error("Fetch error:", err);
        toast.error("Failed to load auction data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddFavorite = (item) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      const updatedFavorites = [...favorites, item];
      setFavorites(updatedFavorites);
      setFavoritedIds([...favoritedIds, item.id]);
      setTotalAmount(totalAmount + item.currentBidPrice);
      toast.success(`${item.title} successfully added to favorites!`);
    }
  };

  const handleRemoveFavorite = (itemId) => {
    const item = favorites.find((fav) => fav.id === itemId);
    const updatedFavorites = favorites.filter((fav) => fav.id !== itemId);
    setFavorites(updatedFavorites);
    setFavoritedIds(favoritedIds.filter((id) => id !== itemId));
    setTotalAmount(totalAmount - item.currentBidPrice);
    toast.success(`${item.title} successfully removed from favorites!`);
  };

  const handlePlaceBid = (item) => {
    // Your bid placement logic here
    toast.success(`${item.title} bid placed successfully!`);
  };

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  if (loading)
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-2 text-gray-600">Loading auctions...</p>
      </div>
    );

  return (
    <section className="p-4 mx-auto md:pt-6 md:pl-28 md:pr-28 md:pb-28 bg-[#ebf0f5]">
      {/* Main Content */}
      <div className="mt-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Active Auctions
        </h2>
        <p className="text-gray-600">Discover and bid on extraordinary items</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Active Auctions - 70% width */}
        <div className="lg:w-[70%]">
          <ActiveAuctions
            items={auctionItems}
            favoritedIds={favoritedIds}
            onAddFavorite={handleAddFavorite}
            onViewDetails={handleViewDetails}
            onPlaceBid={handlePlaceBid}
          />
        </div>

        {/* Favorites Section - 30% width */}
        <div className="lg:w-[30%]">
          <FavoritesSection
            favorites={favorites}
            totalAmount={totalAmount}
            onRemoveFavorite={handleRemoveFavorite}
            onViewDetails={handleViewDetails}
          />
        </div>
      </div>
      {/* Candlestick Charts Section */}
      {chartData.length > 0 && (
        <div className="mb-8 mt-8">
          <CandlestickSection
            items={chartData}
            onViewDetails={handleViewDetails}
            onPlaceBid={handlePlaceBid}
          />
        </div>
      )}
    </section>
  );
};

export default AuctionSection;
