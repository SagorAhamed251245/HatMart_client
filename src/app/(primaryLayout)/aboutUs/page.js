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
      <AboutBanner></AboutBanner>
      <OurStory></OurStory>
      <OurPromise></OurPromise>
      <Ourvalue></Ourvalue>
      <AllMember></AllMember>
    </div>
  );
};

export default aboutPage;
