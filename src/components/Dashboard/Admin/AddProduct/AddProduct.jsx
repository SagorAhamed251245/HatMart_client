import React from "react";
import AddProductForm from "./AddProductForm";
import SectionTitle from "@/components/Home/Products/SectionTitle";

const AddProduct = () => {
  return (
    <section>
      <SectionTitle>Add a New Product</SectionTitle>
      <AddProductForm></AddProductForm>
    </section>
  );
};

export default AddProduct;
