import BrandAdd from "@/components/CategoryProducts/BrandAdd";
import CategoryProducts from "@/components/CategoryProducts/CategoryProducts";
const page = ({ searchParams}) => {
  return (
    <>
      <BrandAdd />
      <CategoryProducts searchParams={searchParams}  pageName={'Search'}/>
    </>
  );
};

export default page;
