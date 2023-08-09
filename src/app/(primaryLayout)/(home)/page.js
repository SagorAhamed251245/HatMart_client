import Hero from "@/components/Home/Hero/Hero";
import Products from "@/components/Home/Products/Products";
import NavBar from "@/components/Shared/NavBar/NavBar";
import React from "react";

const Homepage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Products></Products>
    </>
  );
};

export default Homepage;
