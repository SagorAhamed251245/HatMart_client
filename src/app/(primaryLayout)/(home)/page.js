import Categories from "@/components/Home/Categories/Categories";
import Hero from "@/components/Home/Hero/Hero";
import Products from "@/components/Home/Products/Products";
import NavBar from "@/components/Shared/NavBar/NavBar";
import React from "react";

const Homepage = () => {
  return (
    <>
      <Hero></Hero>
      <Products></Products>
    </>
  );
};

export default Homepage;
