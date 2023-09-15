import React from "react";

const DEmo = () => {
  return (
    <>
      <section className="shadow-xl border py-5 px-2">
        <div className="px-5">
          <div className="border ">
            {allProducts.map((product, index) => (
              <>
                <div className="flex gap-5 items-center my-5 ">
                  <p>#{index}</p>
                  <div className="h-12 w-12 flex">
                    <Image
                      src={product?.image}
                      alt={product?.title}
                      height={150}
                      width={150}
                      className="object-cover w-full"
                    ></Image>
                  </div>
                  <div>{product?.title.slice(0, 30)}...</div>
                </div>
              </>
            ))}
          </div>

          {/*  */}
          <p>Discount and Payment</p>
          <div className="flex justify-between mt-3 mb-3">
            <div>Voucher</div>
            <div>No Applicable Voucher</div>
          </div>

          <hr />
          <p className="font-semibold mt-3">Order Summary</p>
          <div className="flex justify-between mt-3">
            <div>Total Item:</div>
            <div>{allProducts.length}</div>
          </div>
          <div className="flex justify-between">
            <div>Delivery Fee:</div>
            <div>${2}</div>
          </div>
          <div className="flex justify-between">
            <div>Total Payment:</div>
            <div>${totalAmount}</div>
          </div>
          {/*  */}
          <div className="mt-10 ">
            <Link
              className="bg-[#34B701] w-[100%] text-white md:text-base text-sm px-[10px] md:px-4 font-medium py-1 rounded disabled:opacity-60 hover:bg-[#FF7B13]"
              href="/payment/payallmethod"
              as={`/payment/payallmethod?totalAmount=${totalAmount}`}
            >
              Place Order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DEmo;
