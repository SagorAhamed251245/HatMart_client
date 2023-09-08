import BrandAdd from "@/components/CategoryProducts/BrandAdd";
import SearchProducts from "@/components/SearchProduct/SearchProducts";
import getProductByText from "@/utils/getProductByText";
export const metadata = {
  title: "HatMat/searchProducts",
};
const page = async ({ searchParams }) => {
  const product = await getProductByText(searchParams.search);
  return (
    <>
      <BrandAdd />
      <SearchProducts
        searchParams={searchParams}
        product={product}
        pageName={"Search"}
      />
    </>
  );
};

export default page;
