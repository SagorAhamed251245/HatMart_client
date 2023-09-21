import React from "react";
import AboutBanner from "@/components/AboutUs/AboutBanner";
import OurStory from "@/components/AboutUs/Story/OurStory";
import OurPromise from "@/components/AboutUs/Promise/OurPromise";
import Ourvalue from "@/components/AboutUs/Values/Ourvalue";
import AllMember from "@/components/AboutUs/AllMember/AllMember";

export const metadata = {
  title: "HatMat/aboutUs",
};

const aboutPage = () => {
  return (
    <div>
      <AboutBanner style={{ color: "white" }}></AboutBanner>
      <OurStory style={{ color: "white" }}></OurStory>
      <OurPromise style={{ color: "white" }}></OurPromise>
      <Ourvalue style={{ color: "white" }}></Ourvalue>
      <AllMember style={{ color: "white" }}></AllMember>
    </div>
  );
};

export default aboutPage;
