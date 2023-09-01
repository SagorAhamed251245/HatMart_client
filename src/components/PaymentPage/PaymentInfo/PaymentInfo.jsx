"use client";

import { Fragment } from "react";

import Link from "next/link";

const PaymentInfo = () => {
  return (
    <Fragment>
      <section className="shadow-xl border py-5 px-2">
        <div className="px-5">
          <p>Discount and Payment</p>
          <div className="flex justify-between mt-3 mb-3">
            <div>Voucher</div>
            <div>No Applicable Voucher</div>
          </div>

          <hr />
          <p className="font-semibold mt-3">Order Summary</p>
          <div className="flex justify-between mt-3">
            <div>Items total:</div>
            <div>$</div>
          </div>
          <div className="flex justify-between">
            <div>Delivery Fee:</div>
            <div>$</div>
          </div>
          <div className="flex justify-between">
            <div>Total Payment:</div>
            <div>$</div>
          </div>
          <div className="mt-10">
            <Link href={"/payment/payallmethod"}>
              <button className="bg-[#34B701] w-[100%] text-white md:text-base text-sm px-[10px] md:px-4 font-medium py-1 rounded disabled:opacity-60 hover:bg-[#FF7B13]">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PaymentInfo;
