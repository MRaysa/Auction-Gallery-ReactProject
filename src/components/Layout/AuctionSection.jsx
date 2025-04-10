import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ActiveAuctions from "./ActiveAuctions";
import FavoritesSection from "./FavoritesSection";

const AuctionSection = () => {
  const [auctionItems, setAuctionItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favoritedIds, setFavoritedIds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setAuctionItems(data.auctionItems);
      } catch (err) {
        console.error("Fetch error:", err);
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
      toast.success(`${item.title} added to favorites!`);
    }
  };

  const handleRemoveFavorite = (itemId) => {
    const item = favorites.find((fav) => fav.id === itemId);
    const updatedFavorites = favorites.filter((fav) => fav.id !== itemId);
    setFavorites(updatedFavorites);
    setFavoritedIds(favoritedIds.filter((id) => id !== itemId));
    setTotalAmount(totalAmount - item.currentBidPrice);
    toast.error(`${item.title} removed from favorites!`);
  };

  if (loading)
    return <div className="text-center py-8">Loading auctions...</div>;

  return (
    <section className="p-4 mx-auto md:pt-6 md:pl-28 md:pr-28 md:pb-28 bg-[#ebf0f5]">
      {/* Main Content */}
      <div className=" mt-4 mb-6">
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
          />
        </div>

        {/* Favorites Section - 30% width */}
        <div className="lg:w-[30%]">
          <FavoritesSection
            favorites={favorites}
            totalAmount={totalAmount}
            onRemoveFavorite={handleRemoveFavorite}
          />
        </div>
      </div>
    </section>
  );
};

export default AuctionSection;
