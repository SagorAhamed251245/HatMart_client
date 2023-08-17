import BrandAdd from "@/components/CategoryProducts/BrandAdd";
import CategoryProducts from "@/components/CategoryProducts/CategoryProducts";
import SearchProducts from "@/components/SearchProduct/SearchProducts";
const page = ({ searchParams }) => {
  return (
    <>
      <BrandAdd />
      <SearchProducts searchParams={searchParams} pageName={"Search"} />
    </>
  );
};

export default page;
