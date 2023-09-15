import getProducts from "@/utils/getProducts";
import ChildCategoryProducts from "./ChildCategoryProducts";
import getProductByText from "@/utils/getProductByText";

const CategoryProducts = async ({ searchParams, pageName }) => {
  const products = await getProductByText(searchParams.sub_category);

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
