import React from "react";

const AuctionRow = ({ item, isFavorite, onAddFavorite }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="py-4 px-6">
        <div className="flex items-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-12 h-12 rounded-md object-cover mr-4"
          />
          <span className="font-medium">{item.title}</span>
        </div>
      </td>
      <td className="py-4 px-6 text-gray-700">
        ${item.currentBidPrice.toLocaleString()}
      </td>
      <td className="py-4 px-6 text-gray-700">{item.timeLeft}</td>
      <td className="py-4 px-6">
        <button
          onClick={() => onAddFavorite(item)}
          disabled={isFavorite}
          className={`
            relative text-2xl p-2 rounded-full 
            transition-all duration-300 ease-in-out
            ${
              isFavorite
                ? "text-red-500 cursor-not-allowed"
                : `
                    text-gray-400 
                    hover:text-red-500 
                    cursor-pointer
                    hover:scale-110
                    hover:shadow-lg
                    hover:shadow-red-100
                    before:content-['']
                    before:absolute
                    before:inset-0
                    before:rounded-full
                    before:bg-red-50
                    before:opacity-0
                    before:transition-opacity
                    before:duration-300
                    hover:before:opacity-100
                  `
            }
          `}
          aria-label={isFavorite ? "Added to favorites" : "Add to favorites"}
        >
          <span className="relative z-10">{isFavorite ? "❤️" : "🤍"}</span>
        </button>
      </td>
    </tr>
  );
};

export default AuctionRow;
