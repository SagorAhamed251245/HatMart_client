import CartCard from "@/components/Cart/CartCard";
import React from "react";

const AddToCart = () => {
  return (
    <div className="mt-40 mb-20 rounded max-w-[1380px] mx-auto bg-slate-100 p-10 ">
      {/* page title here */}
      <div>
        <h3 className="text-4xl font-semibold mb-2">Cart</h3>
        <p className="text-sm">
          In here Continue with the purchase add or reduce items or delete
          items.
        </p>
      </div>
      {/* This is the item and total payment section */}
      <section>
          {/* card here */}
          <section className="w-2/3 my-10">
            <CartCard></CartCard>
          </section>
          {/* total payment here */}
          <section>

          </section>
      </section>
    </div>
  );
};

export default AddToCart;
