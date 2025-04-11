import React from "react";

const FavoriteItem = ({ item, onRemoveFavorite }) => {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200 last:border-b-0">
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center gap-2">
          <h4 className="font-medium text-gray-900 truncate text-base">
            {item.title}
          </h4>
          <button
            onClick={() => onRemoveFavorite(item.id)}
            className="text-gray-400 hover:text-red-500 text-lg flex-shrink-0 cursor-pointer"
            aria-label="Remove from favorites"
          >
            ✕
          </button>
        </div>
        <div className="flex  gap-4 mt-2">
          <span className="font-medium text-gray-900">
            ${item.currentBidPrice.toLocaleString()}
          </span>
          <span className="text-gray-500">Bids: {item.bidsCount}</span>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
