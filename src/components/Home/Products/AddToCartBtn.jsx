import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";

const AddToCartBtn = ({ _id }) => {
  const { user, logout, cartItems, cartHooks } = useAuth();

  const handleAddToCart = (_id) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existingItemIndex = cartItems.findIndex((item) => item._id === _id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];

      updatedCartItems[existingItemIndex].quantity += 1;

      const updatedCartItemsString = JSON.stringify(updatedCartItems);

      localStorage.setItem("cartItems", updatedCartItemsString);
    } else {
      const newItem = {
        _id: _id,
        quantity: 1,
      };
      const updatedCartItems = [...cartItems, newItem];

      const updatedCartItemsString = JSON.stringify(updatedCartItems);

      localStorage.setItem("cartItems", updatedCartItemsString);
    }
    cartHooks();
    toast.success("Product has been added");
  };

  return (
    <>
      <button
        onClick={() => handleAddToCart(_id)}
        className="flex w-full md:w-28 justify-center items-center gap-2 text-[#34B701] font-medium bg-green-100 text-sm md:text-base px-[10px] md:px-4 py-1 rounded hover:bg-green-200 mb-2 md:mb-0"
      >
        <AiOutlineShoppingCart size={20} /> Add
      </button>
    </>
  );
};

export default AddToCartBtn;
