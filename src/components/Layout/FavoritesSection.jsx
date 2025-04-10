import React from "react";
import FavoriteItem from "./FavoriteItem";

const FavoritesSection = ({ favorites, totalAmount, onRemoveFavorite }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 ">
      <div className="flex items-center mb-4 text-center border-b pb-4 justify-center">
        <span className="text-2xl mr-2">🤍</span>
        <h3 className="text-xl font-bold text-gray-800">Favorite Items</h3>
      </div>

      {favorites.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="font-medium text-gray-700 mb-1">No favorites yet</p>
          <p className="text-gray-500 pb-4">
            Click the heart icon on any item to add it to your favorites
          </p>
          <div className="border-t pt-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-800">
                Total bids Amount:
              </span>
              <span className="font-bold text-gray-800">
                $
                {totalAmount
                  .toLocaleString("en-US", {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  })
                  .replace(/,/g, "")}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-3 mb-4">
            {favorites.map((item) => (
              <FavoriteItem
                key={item.id}
                item={item}
                onRemoveFavorite={onRemoveFavorite}
              />
            ))}
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-800">
                Total bids Amount:
              </span>
              <span className="font-bold text-gray-800">
                $
                {totalAmount
                  .toLocaleString("en-US", {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3,
                  })
                  .replace(/,/g, "")}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FavoritesSection;
