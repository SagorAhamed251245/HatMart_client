import MiddleAdd from "@/components/Home/Advertisement/MiddleAdd";
import Categories from "@/components/Home/Categories/Categories";
import Hero from "@/components/Home/Hero/Hero";
import Products from "@/components/Home/Products/Products";
import NavBar from "@/components/Shared/NavBar/NavBar";
import React from "react";

const Homepage = () => {
  return (
    <>
      <Hero></Hero>
      <Products sectionTitle="Popular Products"></Products>
      <Products sectionTitle="Trending Products"></Products>
      <MiddleAdd></MiddleAdd>
      <Products sectionTitle="Best Selling Products"></Products>
    </>
  );
};

export default Homepage;
