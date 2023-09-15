import EditProducts from "@/components/Dashboard/Admin/AllProducts/EditProducts/EditProducts";
import React from "react";

const editProductPage = ({ params }) => {
  const id = params.id;
  return (
    <>
      <EditProducts _id={id} />
    </>
  );
};

export default editProductPage;
