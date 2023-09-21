// "use client";

import Chatbot from "@/components/Chatbot/Chatbot";
import MiddleAdd from "@/components/Home/Advertisement/MiddleAdd";
import Categories from "@/components/Home/Categories/Categories";

import HeroSection from "@/components/Home/Hero/HeroSection";
import Products from "@/components/Home/Products/Products";
import getIpAddress from "@/utils/getIpAddress/getIpAddress";
import setIpAddress from "@/utils/getIpAddress/setIpAddress";
import React from "react";

const Homepage = () => {
  (async () => {
    try {
      const ipAddress = await getIpAddress();
      if (ipAddress !== null) {
        await setIpAddress(ipAddress);
      } else {
        console.log("Failed to retrieve IP address.");
      }
    } catch (error) {}
  })();
  return (
    <>
      <section className=" w-full mb-[25px] md:mb-[35px] lg:mb-[50px] bg-white dark:bg-transparent">
        <Categories></Categories>
      </section>
      <HeroSection />
      <Products sectionTitle="Popular Products"></Products>
      <Products sectionTitle="Trending Products"></Products>
      <MiddleAdd></MiddleAdd>
      <Products sectionTitle="Best Selling Products"></Products>
      <Products sectionTitle="Discount Product"></Products>

      <Chatbot></Chatbot>
    </>
  );
};

export default Homepage;
