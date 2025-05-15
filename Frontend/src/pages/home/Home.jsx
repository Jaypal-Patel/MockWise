import React from "react";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import RankCard from "./RankCard";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <RankCard />
      <Testimonials />
    </div>
  );
};

export default Home;
