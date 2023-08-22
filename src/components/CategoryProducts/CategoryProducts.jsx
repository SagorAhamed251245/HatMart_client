import getProducts from "@/utils/getProducts";
import ChildCategoryProducts from "./ChildCategoryProducts";

const CategoryProducts = async ({ searchParams, pageName }) => {
  const products = await getProducts();

  return (
    <section className="md:w-[90%] mx-auto min-h-screen mb-24">
      <div className="">
        <ChildCategoryProducts
          products={products}
          searchParams={searchParams}
          pageName={pageName}
        />
      </div>
    </section>
  );
};

export default CategoryProducts;
