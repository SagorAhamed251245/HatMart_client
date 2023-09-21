"use client";
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import Image from "next/image";
import addProduct from "@/utils/addProduct";
import DropSvg from "../../AddProduct/DropSvg";

const EditProductForm = ({ ProductCategory, products, _id }) => {
  const editProduct = products?.find((p) => p?._id === _id);

  const [MainImage, setMainImage] = useState(editProduct?.image);
  const [Images, setImages] = useState([...editProduct?.images]);
  const [subCategory, setSubCategory] = useState([]);

  // edit product from asik
  


  useEffect(() => {
    const subCategories = ProductCategory.flatMap((item) => item.sub_category);
    setSubCategory(subCategories);
  }, [ProductCategory]);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const uploadImage = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;

    formData.append("image", event.target.files[0]);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=f52e595071a0957951aba70405bfbaf8`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json();

      setValue("image", data.data.url);
      setMainImage(data.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadMultiImage = async (event) => {
    const formData = new FormData();

    for (let i = 0; i < event.target.files.length; i++) {
      formData.append(`image`, event.target.files[i]);
      try {
        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=f52e595071a0957951aba70405bfbaf8`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!res.ok) {
          const errorResponse = await res.json(); // Check for detailed error response
          throw new Error(
            `Failed to upload image: ${errorResponse.error.message}`
          );
        }

        const data = await res.json();
        setImages((prevImages) => [...prevImages, data.data.url]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onSubmit = async (data, event) => {
    let {
      title,
      description,
      packagingDelivery,
      warnings,
      price,
      brand,
      category,
      discount_percent,
      image,
      stock,
      sub_category,
      unit,
    } = data;
   
    const priceAsNumber = parseFloat(price);
    const stockAsNumber = parseInt(stock);
    const percentAsNumber = parseFloat(discount_percent);

    const updatedItem = {
      title,
      details: {
        packagingDelivery,
        warnings,
        description,
      },
      brand,
      category,
      sub_category,
      unit,
      image,
      images: Images,
      discount_percent: percentAsNumber,
      price: priceAsNumber,
      stock: stockAsNumber,
    };
    

    // await addProduct(updatedItem);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex w-full gap-5">
          {/* left site from */}
          <div className="lg:w-[70%] ">
            <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
              <h3 className="text-black mb-1 mt-3 font-semibold">
                Product information
              </h3>
              <hr className="border-t border-[#FF7B13]" />
              <div>
                <label
                  className="block text-black mb-1 mt-3 font-semibold  "
                  htmlFor="title"
                >
                  Title:
                </label>
                <input
                  className=" border rounded w-full p-2 shadow-md "
                  type="text"
                  id="title"
                  placeholder="Product Name"
                  defaultValue={editProduct?.title}
                  name="title"
                  {...register("title", { required: true })} // You can handle the form data submission here
                />
                {errors.title && <span>This field is required</span>}
              </div>

              <div>
                <label
                  className="block text-black mb-1 mt-3 font-semibold"
                  htmlFor="description"
                >
                  Description:
                </label>
                <textarea
                  className=" border rounded w-full p-2 h-36 shadow-md"
                  id="description"
                  placeholder="write Product Description"
                  name="description"
                  defaultValue={editProduct?.details?.description}
                  {...register("description", { required: true })}
                ></textarea>
              </div>

              <div>
                <label
                  className="block text-black mb-1 mt-3 font-semibold "
                  htmlFor="packagingDelivery "
                >
                  Packaging & Delivery:
                </label>
                <textarea
                  className=" border rounded w-full p-2  shadow-md"
                  id="packagingDelivery"
                  placeholder="Write About Product Packaging & Delivery"
                  defaultValue={editProduct?.details?.packagingDelivery}
                  name="packagingDelivery"
                  {...register("packagingDelivery", { required: true })}
                ></textarea>
              </div>

              <div>
                <label
                  className="block text-black mb-1 mt-3 font-semibold"
                  htmlFor="warnings"
                >
                  Warnings:
                </label>
                <textarea
                  className=" border rounded w-full p-2  shadow-md"
                  id="warnings"
                  defaultValue={editProduct?.details?.warnings}
                  placeholder="Write About Product  Warnings"
                  name="warnings"
                  {...register("warnings", { required: true })}
                ></textarea>
              </div>
            </div>
            {/* Media information*/}
            <div className="border rounded-xl w-full p-5 mb-5 shadow-xl  ">
              {/* Additional :*/}
              <h3 className="text-black mb-1 mt-3 font-semibold">Media</h3>
              <hr className="border-t border-[#FF7B13]" />
              <div className="md:flex gap-5">
                <div className="md:w-[60%] ">
                  <label
                    className="block text-black mb-1 mt-3 font-semibold "
                    htmlFor="image"
                  >
                    Main Image:
                  </label>
                  <label className="shadow-md flex justify-center w-full h-32 md:h-96  transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                    {!MainImage ? (
                      <span className="flex items-center space-x-2">
                        <DropSvg />
                        <span className="font-medium text-gray-600">
                          Drop files to Attach, or
                          <span className="text-blue-600 underline">
                            browse
                          </span>
                        </span>
                      </span>
                    ) : (
                      <>
                        <div className="flex relative overflow-hidden">
                          <Image
                            src={MainImage}
                            className="object-cover"
                            width={600}
                            height={600}
                            alt="main image"
                          ></Image>
                        </div>
                      </>
                    )}
                    <input
                      type="file"
                      id="image"
                      name="image"
                      // required
                      onChange={uploadImage}
                      className="hidden "
                    />
                  </label>
                </div>

                {/* Additional :*/}
                <div className="md:w-[40%]">
                  <label className="block text-black mb-1 mt-3 font-semibold ">
                    Additional Image URLs:
                  </label>

                  <label className=" shadow-md flex justify-center w-full h-32 md:h-96   transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                    {Images.length > 0 ? (
                      <>
                        <div className="grid grid-cols-2 overflow-hidden  row-span-2">
                          {Images.map((item, index) => (
                            <div
                              key={index}
                              className="relative col-span-1 h-auto w-full row-span-1"
                            >
                              <Image
                                src={item}
                                
                                height={100}
                                width={300}
                                className="object-cover"
                                alt="sub image"
                              ></Image>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="flex items-center space-x-2 ">
                          <DropSvg />
                          <span className="font-medium text-gray-600">
                            Drop files to Attach, or
                            <span className="text-blue-600 underline">
                              browse
                            </span>
                          </span>
                        </span>
                      </>
                    )}

                    <input
                      type="file"
                      id="images"
                      
                      multiple
                      name="images"
                      // required
                      className="hidden "
                      onChange={uploadMultiImage}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* left site from */}
          {/* right side from */}
          <div className="lg:w-[30%] ">
            {/* pricing */}
            <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
              <h3 className="text-black mb-1 mt-3 font-semibold">
                Pricing & Stock
              </h3>
              <hr className="border-t border-[#FF7B13]" />
              <div>
                <label
                  className="block text-black mb-1 mt-3 font-semibold"
                  htmlFor="price"
                >
                  Price:
                </label>
                <input
                  className=" border rounded w-full p-2 shadow-md"
                  type="number"
                  id="price"
                  defaultValue={editProduct?.price}
                  placeholder="0"
                  name="price"
                  {...register("price", { required: true })}
                />
              </div>

              <div>
                <label
                  className="block text-black mb-1 mt-3 font-semibold"
                  htmlFor="discount_percent"
                >
                  Discount Percent:
                </label>
                <input
                  className=" border rounded w-full p-2 shadow-md"
                  type="discount_percent"
                  id="discount_percent"
                  defaultValue={editProduct?.discount_percent}
                  placeholder="0"
                  name="discount_percent"
                  {...register("discount_percent")}
                />
              </div>

              {/* Stock information */}
              <div>
                <label
                  className="block text-black mb-1 mt-3 font-semibold"
                  htmlFor="unit"
                >
                  Unit:
                </label>
                <input
                  className=" border rounded w-full p-2 shadow-md"
                  type="unit"
                  id="unit"
                  defaultValue={editProduct?.unit}
                  placeholder="g; kg; quantity "
                  name="unit"
                  {...register("unit", { required: true })}
                />
              </div>

              <div>
                <label
                  className="block text-black mb-1 mt-3 font-semibold"
                  htmlFor="stock"
                >
                  Stock:
                </label>
                <input
                  className=" border rounded w-full p-2 shadow-md"
                  type="number"
                  placeholder="0"
                  id="stock"
                  defaultValue={editProduct?.stock_quantity}
                  name="stock"
                  {...register("stock", { required: true })}
                />
              </div>
            </div>

            {/* Organization*/}
            <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
              <h3 className="text-black mb-1 mt-3 font-semibold">
                {" "}
                Organization
              </h3>
              <hr className="border-t border-[#FF7B13]" />
              <div>
                <label
                  className="block text-black mb-1 mt-3 font-semibold"
                  htmlFor="brand"
                >
                  brand:
                </label>
                <input
                  placeholder="Product brand name"
                  className=" border rounded w-full p-2 shadow-md"
                  defaultValue={editProduct?.brand}
                  type="text"
                  id="brand"
                  name="brand"
                  {...register("brand")}
                />
              </div>
              <div>
                <label
                  className="block text-black mb-1 mt-3 font-semibold"
                  htmlFor="category"
                >
                  Category:
                </label>
                <select
                  className=" border rounded w-full p-2 shadow-md"
                  id="category"
                  defaultValue={(editProduct?.category) || ''}
                  placeholder="Select Product Category"
                  name="category"
                  {...register("category", { required: true })}
                >
                  {ProductCategory.map(({ category, _id }) => (
                    <option
                      key={_id}
                      value={category}
                      
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="block text-black mb-1 mt-3 font-semibold"
                  htmlFor="sub_category"
                >
                  Sub Category:
                </label>
                <select
                  className=" border rounded w-full p-2 shadow-md"
                  type="text"
                  defaultValue={
                    editProduct?.sub_category
                      ? editProduct?.sub_category[0]
                      : ''
                  }
                  id="sub_category"
                  placeholder="Select Product Sub Category"
                  name="sub_category"
                  {...register("sub_category", { required: true })}
                >
                  {subCategory.map((sub_category, index) => (
                    <option
                      key={index}
                      value={sub_category}
                     
                    >
                      {sub_category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* right side from */}
        </div>
        <div className="w-[80%] mx-auto sticky bottom-5 mt-5 border h-20 bg-white shadow-xl rounded-lg ">
          <div className="flex h-full p-3 justify-between items-center ">
            <p className="text-black font-bold">Edit Product </p>
            <input
              className="text-[black] hover:bg-orange-300 font-medium  px-3 py-2 rounded-md bg-[#FF7B13]"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default EditProductForm;
