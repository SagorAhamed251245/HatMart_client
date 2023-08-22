import DescriptionAndReviews from "@/components/Home/Products/ProductDetailsPage/DescriptionAndReviews";
import ProductDetails from "@/components/Home/Products/ProductDetailsPage/ProductDetails";
import ProductImages from "@/components/Home/Products/ProductDetailsPage/ProductImages";
import getSingleProduct from "@/utils/getSingleProduct";

const productDerailsPage = async ({ searchParams }) => {
  const productData = await getSingleProduct(searchParams.productId);
  console.log(productData);

  return (
    <>
      <section className="mt-36 mb-20 md:w-[90%] mx-auto">
        <div className="md:flex gap-10">
          <ProductImages productData={productData} />

          <ProductDetails productData={productData} />
        </div>

        <DescriptionAndReviews id={productData?._id} productData={productData} />
      </section>
    </>
  );
};

export default productDerailsPage;
