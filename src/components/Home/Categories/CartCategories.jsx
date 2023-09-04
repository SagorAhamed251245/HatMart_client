import getProducts from "@/utils/getProducts";
import ChildProduct from "../Products/ChildProduct";
import SectionTitle from "../Products/SectionTitle";

const CartCategories = async () => {
    const DiscountProducts = await getProducts();
    const products = DiscountProducts.filter(product=>product.discount_percent > 0)
    // console.log(products)

    return (
        <div className="mb-20 md:w-[90%] mx-auto ">
      <SectionTitle>Discounted Products</SectionTitle>
      <div className="">
        <ChildProduct products={products} />
      </div>
    </div>
    );
};

export default CartCategories;