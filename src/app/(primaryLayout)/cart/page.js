import Cart from "@/components/Cart/Cart";
import getProducts from "@/utils/getProducts";
const AddToCart = async () => {

  const products = await getProducts();


  return (
    <>
      <Cart products={products} />
    </>
  );
};

export default AddToCart;
