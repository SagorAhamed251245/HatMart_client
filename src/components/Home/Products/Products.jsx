import getProducts from "@/utils/getProducts";
import SectionTitle from "./SectionTitle";

import ChildProduct from "./ChildProduct";

const Products = async ({ sectionTitle }) => {
  const products = await getProducts();

  return (
    <div className="mb-20 md:w-[90%] mx-auto ">
      <SectionTitle>{sectionTitle}</SectionTitle>
      <div className="">
        <ChildProduct products={products} sectionTitle={sectionTitle} />
      </div>
    </div>
  );
};

export default Products;
