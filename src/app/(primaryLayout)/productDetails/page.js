import DescriptionAndReviews from "@/components/Home/Products/ProductDetailsPage/DescriptionAndReviews";
import ProductDetails from "@/components/Home/Products/ProductDetailsPage/ProductDetails";
import ProductImages from "@/components/Home/Products/ProductDetailsPage/ProductImages";
import getReviews from "@/utils/getReviews";
import getSingleProduct from "@/utils/getSingleProduct";
export const metadata = {
  title: "HatMat/productDerails",
};
const productDerailsPage = async ({ searchParams }) => {
  const productData = await getSingleProduct(searchParams.productId);
  console.log(productData);
  const { productReviews: reviewsData = [] } = await getReviews(
    searchParams.productId
  );

  return (
    <>
      <section className=" mt-16 mb-20 md:w-[90%] mx-auto">
        <div className="md:flex gap-10">
          <ProductImages productData={productData} />

          <ProductDetails productData={productData} reviewsData={reviewsData} />
        </div>

        <DescriptionAndReviews
          productData={productData}
          reviewsData={reviewsData}
        />
      </section>
    </>
  );
};

export default productDerailsPage;
