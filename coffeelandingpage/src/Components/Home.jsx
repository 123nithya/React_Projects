import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import BottomLine from "./BottomLine";
import ReadMore from "./ReadMore";
import DidYouKnow from "./DidYouKnow";
import Coffee from "./Coffee";
import Order from "./Order";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <BottomLine />
      <ReadMore />
      <DidYouKnow />
      <Coffee />
      <Order />
      <Footer />
    </div>
  );
};

export default Home;
