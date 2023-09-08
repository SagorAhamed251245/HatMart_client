import BrandAdd from "@/components/CategoryProducts/BrandAdd";
import CategoryProducts from "@/components/CategoryProducts/CategoryProducts";
export const metadata = {
  title: "HatMat/categoryProducts",
};
const CategoryProductsPage = ({ searchParams }) => {
  return (
    <>
      <BrandAdd />
      <CategoryProducts searchParams={searchParams} pageName={"Category"} />
    </>
  );
};

export default CategoryProductsPage;
