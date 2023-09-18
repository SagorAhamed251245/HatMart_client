// "use client";

import Chatbot from "@/components/Chatbot/Chatbot";
import MiddleAdd from "@/components/Home/Advertisement/MiddleAdd";
import Categories from "@/components/Home/Categories/Categories";

import HeroSection from "@/components/Home/Hero/HeroSection";
import Products from "@/components/Home/Products/Products";
import getIpAddress from "@/utils/getIpAddress/getIpAddress";
import React from "react";

const Homepage = async () => {
  await getIpAddress().then((ipAddress) => {
    if (ipAddress !== null) {
      console.log("Your IP address is:", ipAddress);
    } else {
      console.log("Failed to retrieve IP address.");
    }
  });
  return (
    <>
      <HeroSection />
      <Products sectionTitle="Popular Products"></Products>
      <Products sectionTitle="Trending Products"></Products>
      <MiddleAdd></MiddleAdd>
      <Products sectionTitle="Best Selling Products"></Products>
      <Products sectionTitle="Discount Product"></Products>
      <Products sectionTitle="Eco-Friendly Product"></Products>
      <Chatbot></Chatbot>
    </>
  );
};

export default Homepage;
