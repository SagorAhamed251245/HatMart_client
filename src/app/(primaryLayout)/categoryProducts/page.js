import BrandAdd from "@/components/CategoryProducts/BrandAdd";
import CategoryProducts from "@/components/CategoryProducts/CategoryProducts";

const CategoryProductsPage = ({ searchParams }) => {
  return (
    <>
      <BrandAdd />
      <CategoryProducts
        searchParams={searchParams}
        pageName={"Category"}
       
      />
    </>
  );
};

export default CategoryProductsPage;
