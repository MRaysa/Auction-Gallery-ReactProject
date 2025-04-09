import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 md:py-10 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Tagline */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            <span className="text-[#003EA4]">Auction</span>
            <span className="text-[#FFD337]">Gallery</span>
          </h2>
          <p className="text-gray-600 mt-2 text-base sm:text-lg space-x-2 sm:space-x-3">
            <span className="font-medium">Bid.</span>
            <span className="font-medium">Win.</span>
            <span className="font-medium">Own.</span>
          </p>
        </div>

        {/* Navigation Links  */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8 mb-6 md:mb-8">
          <a
            href="#"
            className="text-gray-700 hover:text-[#003EA4] transition-colors text-sm sm:text-base"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#003EA4] transition-colors text-sm sm:text-base"
          >
            Auctions
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#003EA4] transition-colors text-sm sm:text-base"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#003EA4] transition-colors text-sm sm:text-base"
          >
            How It Works
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs sm:text-sm">
          © 2025 AuctionHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
