import React from "react";

const FavoriteItem = ({ item, onRemoveFavorite }) => {
  return (
    <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
      <img
        src={item.image}
        alt={item.title}
        className="w-12 h-12 rounded-md object-cover border"
      />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-gray-800 truncate">{item.title}</h4>
          <button
            onClick={() => onRemoveFavorite(item.id)}
            className="text-red-500 hover:text-red-700 text-lg"
            aria-label="Remove from favorites"
          >
            ❌
          </button>
        </div>
        <div className="flex justify-between mt-1 text-sm">
          <span className="text-gray-700">
            ${item.currentBidPrice.toLocaleString()}
          </span>
          <span className="text-gray-500">Bids: {item.bidsCount}</span>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
