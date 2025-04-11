import React, { useState } from "react";
import CandyCandlestickChart from "./CandyCandlestickChart";
import Modal from "../Common/Modal";

const CandlestickSection = ({ items = [], onViewDetails, onPlaceBid }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  if (!items || items.length === 0) return null;

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleBidClick = (item) => {
    if (onPlaceBid) {
      onPlaceBid(item); // Parent component handles the toast
    }
    closeModal();
  };

  return (
    <>
      <section className="py-12 bg-gradient-to-b from-pink-50 to-blue-50 rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
                Price Trends
              </span>
            </h2>
            <p className="text-gray-600">
              Track how prices change over time
              <span className="ml-2">📈</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="p-4 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {item.title}
                    </h3>
                    <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs font-medium">
                      ${item.currentBidPrice?.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex mt-2 space-x-2">
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                      {item.timeLeft}
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                      {item.bidsCount} bids
                    </span>
                  </div>
                </div>

                <div className="p-4 h-40">
                  <CandyCandlestickChart
                    itemId={item.id}
                    priceHistory={item.priceHistory}
                  />
                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <button
                    onClick={() => handleViewDetails(item)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-all flex items-center justify-center"
                  >
                    View Details
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && selectedItem && (
        <Modal onClose={closeModal}>
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedItem.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-64 object-contain rounded-lg bg-gray-100"
                />
                <div className="mt-4">
                  <h3 className="font-semibold text-lg mb-2">Description</h3>
                  <p className="text-gray-700">{selectedItem.description}</p>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-lg mb-3">
                    Bid Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Bid:</span>
                      <span className="font-medium">
                        ${selectedItem.currentBidPrice?.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time Left:</span>
                      <span className="font-medium">
                        {selectedItem.timeLeft}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Bids:</span>
                      <span className="font-medium">
                        {selectedItem.bidsCount}
                      </span>
                    </div>
                  </div>
                </div>

                {selectedItem.priceHistory && (
                  <div className="h-64">
                    <h3 className="font-semibold text-lg mb-2">
                      Price History
                    </h3>
                    <CandyCandlestickChart
                      itemId={selectedItem.id}
                      priceHistory={selectedItem.priceHistory}
                      height={200}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleBidClick(selectedItem);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Place Bid
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CandlestickSection;
