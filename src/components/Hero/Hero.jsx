import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-white">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bid on Unique Items from Around the World
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover rare collectibles, luxury goods, and vintage items in our
              curated auctions
            </p>
            <button className="bg-white text-gray-900 hover:bg-indigo-50  border-2 rounded-full font-bold py-3 px-8 text-lg transition duration-300 cursor-pointer">
              Explore Auctions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
