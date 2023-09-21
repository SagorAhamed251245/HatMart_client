import Cart from "@/components/Cart/Cart";
import getProducts from "@/utils/getProducts";
export const metadata = {
  title: "HatMat/cart",
};
const AddToCart = async () => {
  const products = await getProducts();

  return (
    <>
      <Cart products={products}  />
    </>
  );
};

export default AddToCart;
