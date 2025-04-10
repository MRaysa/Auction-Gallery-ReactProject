import React from "react";

const AuctionRow = ({ item }) => {
  return (
    <tr className="hover:bg-gray-100 border-gray-300">
      <td className="py-4 px-6">
        <div className="flex items-center">
          <img
            className="w-12  h-12 rounded-md object-cover mr-4"
            src={item.image}
            alt=""
          />
          <span>{item.title}</span>
        </div>
      </td>
      <td className="py-4 px-6 text-gray-500">{item.bidsCount}</td>
      <td className="py-4 px-6 text-gray-700">{item.timeLeft}</td>
      <td className="py-4 px-6">
        <button className="cursor-pointer">🤍</button>
      </td>
    </tr>
  );
};

export default AuctionRow;
