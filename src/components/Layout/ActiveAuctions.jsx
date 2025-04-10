import React from "react";
import AuctionRow from "./AuctionRow";

const ActiveAuctions = ({ items, favoritedIds, onAddFavorite }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-6 text-left font-semibold text-gray-700">
                Items
              </th>
              <th className="py-4 px-6 text-left font-semibold text-gray-700">
                Current Bid
              </th>
              <th className="py-4 px-6 text-left font-semibold text-gray-700">
                Time Left
              </th>
              <th className="py-4 px-6 text-left font-semibold text-gray-700">
                Bid Now
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map((item) => (
              <AuctionRow
                key={item.id}
                item={item}
                isFavorite={favoritedIds.includes(item.id)}
                onAddFavorite={onAddFavorite}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveAuctions;
