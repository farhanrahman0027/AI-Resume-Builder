import React from "react";
import Banner from '../Components/Home/Banner'
import HeroSection from "../Components/Home/HeroSection";
import Features from "../Components/Home/Features";
import Testimonial from "../Components/Home/Testimonial";
import CallToAction from "../Components/Home/CallToAction";
const Home = () => {
  return (
    <div>
      <Banner/>
      <HeroSection/>
      <Features/>
      <Testimonial/>
      <CallToAction/>
    </div>
  );
};

export default Home;
