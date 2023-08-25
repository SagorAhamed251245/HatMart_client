"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReactImageZoom from "react-image-zoom";

const ProductImages = ({ productData }) => {
  const [mainImage, setMainImage] = useState(productData?.images[0]); // Set initial state to null

  // Main product image change handler
  const handleMainImage = (image) => {
    setMainImage(image);
  };
  const zoomProps = {
    width: 300,
    height: 300,
    zoomWidth: 400,
    zoomPosition: "original",
    img: mainImage,
    scale: 1.1,
  };
  return (
    <div className="border border-gray-300 rounded-xl w-full md:w-3/5 p-4 gap-5">
      {/* <div className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-md cursor-pointer">
            <ReactImageZoom {...zoomProps} />
          </div> */}
      <div className="flex h-72 relative justify-center items-center mb-5">
        <Image
          className="rounded h-full"
          src={mainImage}
          width={300}
          height={300}
          alt="product image"
        />
        {/* Todo: Image Zoom Milestone-2 */}

        {/* <ReactImageZoom {...zoomProps} /> */}
      </div>

      <div className="flex flex-wrap gap-2 ">
        {productData?.images &&
          productData?.images.map((image, i) => (
            <figure
              className={`border-[1.5px] h-20 rounded-xl flex justify-center items-center overflow-hidden ${
                mainImage === image && "border-green-500  duration-200  "
              } p-2`}
              onClick={() => handleMainImage(image)}
              key={i}
            >
              <Image
                className="rounded h-full"
                src={image}
                width={70}
                height={70}
                alt="product image"
                loading="lazy"
              />
            </figure>
          ))}
      </div>
    </div>
  );
};

export default ProductImages;
