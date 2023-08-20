import DescriptionAndReviews from "@/components/Home/Products/ProductDetailsPage/DescriptionAndReviews";
import ProductDetails from "@/components/Home/Products/ProductDetailsPage/ProductDetails";
import ProductImages from "@/components/Home/Products/ProductDetailsPage/ProductImages";
import getSingleProduct from "@/utils/getSingleProduct";

const ProductDetailsPage = async ({ params }) => {
const productData = await getSingleProduct(params._id)
console.log(productData);
  return (
    <>
    <h1>product ditailes</h1>
      {/* <section className="mt-36 mb-20 md:w-[90%] mx-auto">
      <div className="md:flex gap-10">
        
        <ProductImages productData={productData} />
      
        <ProductDetails productData={productData} />
      </div>
      
      <DescriptionAndReviews id={productData._id} productData={productData} />
    </section> */}
    </>
  );
};

export default ProductDetailsPage;
