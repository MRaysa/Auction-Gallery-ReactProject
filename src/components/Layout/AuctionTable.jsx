import React from "react";
import AuctionRow from "./AuctionRow";

const AuctionTable = ({ items, onAddFavorite }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left font-semibold text-gray-700">
              Items
            </th>
            <th className="py-3 px-4 text-left font-semibold text-gray-700">
              Current Bid
            </th>
            <th className="py-3 px-4 text-left font-semibold text-gray-700">
              Time Left
            </th>
            <th className="py-3 px-4 text-left font-semibold text-gray-700">
              Bid Now
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {items.map((item) => (
            <AuctionRow
              key={item.id}
              item={item}
              onAddFavorite={onAddFavorite}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuctionTable;
