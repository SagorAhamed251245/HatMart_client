import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const AddToCartBtn = ({ handleAddToCart, id }) => {
  return (
    <>
      <Link>
        <button
          onClick={() => handleAddToCart(id)}
          className="flex justify-center items-center gap-2 text-[#34B701] font-medium bg-green-100 text-sm md:text-base px-[10px] md:px-4 py-1 rounded hover:bg-green-200"
        >
          <AiOutlineShoppingCart size={20} /> Add
        </button>
      </Link>
    </>
  );
};

export default AddToCartBtn;
