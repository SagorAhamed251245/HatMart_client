import MiddleAdd from "@/components/Home/Advertisement/MiddleAdd";
import Categories from "@/components/Home/Categories/Categories";

import HeroSection from "@/components/Home/Hero/HeroSection";
import Products from "@/components/Home/Products/Products";
import NavBar from "@/components/Shared/NavBar/NavBar";
import React from "react";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Products sectionTitle="Popular Products"></Products>
      <Products sectionTitle="Trending Products"></Products>
      <MiddleAdd></MiddleAdd>
      <Products sectionTitle="Best Selling Products"></Products>
    </>
  );
};

export default Homepage;
