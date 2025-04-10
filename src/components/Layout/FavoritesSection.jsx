import React from "react";

const FavoritesSection = () => {
  return (
    <div className="rounded-md shadow-2xl bg-white">
      <div className="flex items-center justify-center p-2 border-b mb-4">
        <span className="text-2xl">🤍</span>
        <h3 className="text-2xl">Favorite Items</h3>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="font-medium text-gray-700 mb-1">No favorites yet</p>
        <p className="text-gray-500 pb-4">
          Click the heart icon on any item to add it to your favorites
        </p>
        <div className="border-t pt-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-800">Total bids number:</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesSection;
