import Link from "next/link";

const BuyNow = ({ stock_quantity, _id }) => {
  let cartItems = [{ _id, quantity: 1 }];
  return (
    <>
      <Link
        href={{
          pathname: `/payment`,
          query: {
            productId: JSON.stringify(cartItems),
          },
        }}
        disabled={stock_quantity == 0}
        className="bg-[#ff6347cc]  text-white md:text-base text-sm px-[10px] md:px-4 font-medium py-1 rounded disabled:opacity-60 hover:bg-[#FF7B13]"
      >
        Buy Now
      </Link>
    </>
  );
};

export default BuyNow;
