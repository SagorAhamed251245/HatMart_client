import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";

const AddCartBtn = ({ _id }) => {
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
    toast.success("Product has been added");
  };
  return (
    <button
      onClick={() => handleAddToCart(_id)}
      className="flex justify-center items-center gap-2 text-[#34B701] font-medium  bg-green-100 px-6 py-1.5 rounded hover:bg-green-200"
    >
      <AiOutlineShoppingCart size={24} /> Add{" "}
    </button>
  );
};

export default AddCartBtn;
