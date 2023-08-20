"use client"
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReviewTab from "./ReviewTab";
const DescriptionAndReviews = ({ id, productData }) => {
  const [reviews, setReviews] = useState([]);

  // fetch data
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        const reviewData = data.filter((product) => product.productId === id);
        setReviews(reviewData);
      });
  }, [id]);
  return (
    <div className="border border-gray-300 rounded-xl p-5 mt-10">
      <Tabs>
        <TabList className="text-center  mx-auto  flex gap-6 tabs text-gray-600 py-3 duration-500">
          <Tab
            className="font-semibold cursor-pointer  border  rounded-full px-5 py-1 outline-none"
            selectedClassName="text-[#34B701]  border-[#34B701] duration-300"
          >
            Description
          </Tab>
          <Tab
            className="font-semibold cursor-pointer  border  rounded-full px-5 py-1 outline-none"
            selectedClassName="text-[#34B701]  border-[#34B701] duration-300"
          >
            Reviews ({reviews.length})
          </Tab>
        </TabList>

        <TabPanel>
          <div className="mt-8">
            <p className="text-gray-500 text-justify">
             {productData?.details?.description}
            </p>

            <div className="mt-10">
              <h3 className="text-gray-700 font-medium text-xl">
                Packaging & Delivery
              </h3>
              <p className="text-gray-500 mt-4 text-justify">
              {productData?.details?.packagingDelivery}
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-gray-700 font-medium text-xl">Warnings</h3>
              <p className="text-gray-500 mt-4 text-justify">
              {productData?.details?.warnings}
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-5">
            <ReviewTab id={id} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DescriptionAndReviews;
