import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import AuctionSection from "./components/Layout/AuctionSection";
import { ToastContainer } from "react-toastify";
import SocialProof from "./components/SocialProof/SocialProof";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      <AuctionSection></AuctionSection>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        // hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SocialProof></SocialProof>
      <Footer></Footer>
    </>
  );
}

export default App;
