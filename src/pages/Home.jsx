import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Pillars from "../components/Home/Pillars";
import Mission from "../components/Home/Mission";
import CTA from "../components/Home/CTA";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Pillars />
      <Mission />
      <CTA />
    </div>
  );
};

export default Home;
