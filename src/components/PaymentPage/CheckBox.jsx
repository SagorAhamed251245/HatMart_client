import Image from "next/image";
import React from "react";
import { AiOutlineCreditCard } from "react-icons/ai";

const CheckBox = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-5xl text-center">
        <h1>Credit Card Payment Gateway</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            {" "}
            {/* Adjusted margin */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="row">
                  <h3 className="text-center">Payment Details</h3>
                  <div className="inlineimage flex gap-2">
                    <Image
                      src="https://i.ibb.co/XF7Ns99/Discover-Curved.webp"
                      alt="HatMart-logo"
                      width={100}
                      height={100}
                    />
                    <Image
                      src="https://i.ibb.co/Gcd74NF/Mastercard-Curved.webp"
                      alt="HatMart-logo"
                      width={100}
                      height={100}
                    />
                    <Image
                      src="https://i.ibb.co/S7mTJ97/Paypal-Curved.webp"
                      alt="HatMart-logo"
                      width={100}
                      height={100}
                    />
                    <Image
                      src="https://i.ibb.co/LdY4YNq/American-Express-Curved.webp"
                      alt="HatMart-logo"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
              <div className=" container">
                {" "}
                {/* Adjusted padding */}
                <form role="form">
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="form-group">
                        <label>CARD NUMBER</label>
                        <div className="input-group">
                          <input
                            type="tel"
                            className="block py-2.5 px-0 w-full  q"
                            placeholder="Valid Card Number"
                          />
                          <span className="input-group-addon">
                            <AiOutlineCreditCard width={100} height={100} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-7 col-md-7">
                      <div className="form-group">
                        <label>
                          <span className="hidden-xs">EXPIRATION</span>
                          <span className="visible-xs-inline">EXP</span> DATE
                        </label>
                        <input
                          type="tel"
                          className="block py-2.5 px-0 w-full"
                          placeholder="MM / YY"
                        />
                      </div>
                    </div>
                    <div className="col-xs-5 col-md-5 pull-right">
                      <div className="form-group">
                        <label>CV CODE</label>
                        <input
                          type="tel"
                          className="block py-2.5 px-0 w-full"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="form-group">
                        <label>CARD OWNER</label>
                        <input
                          type="text"
                          className="block py-2.5 px-0 w-full"
                          placeholder="Card Owner Name"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="panel-footer">
                <div className="row">
                  <div className="col-xs-12">
                    <button className="btn btn-success btn-lg btn-block">
                      Confirm Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
