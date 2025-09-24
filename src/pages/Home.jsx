import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Abouts from "../components/about/About";
import Gallery from "./Gallery";
import Pricings from "../components/home/Pricings";
import Team from "../components/home/Team";
import Partners from "../components/home/Partiners";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Abouts />
      <Pricings />
      <Partners />
      < Testimonial />
      <Team />
      <Gallery />
      <div>Home</div>
    </>
  );
};

export default Home;
