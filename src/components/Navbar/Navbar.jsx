import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 md:px-14">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-[#003EA4]">Auction</span>
          <span className="text-xl font-bold text-[#FFD337]">Gallery</span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
          >
            Auctions
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
          >
            How It Works
          </a>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {/* Notification Bell */}
          <button className="hidden md:block text-gray-700 hover:text-indigo-600 relative bg-blue-100 p-2 rounded-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>

          {/* User Avatar */}
          <button className="hidden md:block text-gray-700 hover:text-indigo-600 cursor-pointer">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-indigo-100">
              <img
                alt="User profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="w-full h-full object-cover"
              />
            </div>
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - shown/hidden based on state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 py-2 font-medium border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 py-2 font-medium border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Auctions
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 py-2 font-medium border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 py-2 font-medium border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <div className="flex items-center space-x-4 py-2">
              <button className="text-gray-700 hover:text-indigo-600 relative cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="text-gray-700 hover:text-indigo-600">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-indigo-100">
                  <img
                    alt="User profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
