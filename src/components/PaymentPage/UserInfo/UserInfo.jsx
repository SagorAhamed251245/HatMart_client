"use client";
import React, { Fragment, useState } from "react";

import Modal from "@/components/Modal";
import UserForm from "./UserForm";

const UserInfo = () => {
  const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(true);
  // };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <Fragment>
      <section className="shadow-xl border py-4 px-2 sm:px-4 md:px-6">
        <h2 className="pl-2 mb-5 sm:text-lg md:text-2xl font-semibold sm:text-center  text-[#34B701]">
          User Details
        </h2>
        <p>
          <span className="font-light text-xs"> Deliverd to: Ani Ghosal </span>
        </p>
        <div>
          <span className="font-light text-xs">
            HOME 1671406107 331/1,West Deobhogh,Narayanganj{" "}
            <button
              onClick={() => setShowModal(true)}
              onClose={() => setShowModal(false)}
              className="btn btn-active btn-link font-light text-xs"
              style={{ textDecoration: "none", fontSize: "inherit" }}
            >
              Change
            </button>
          </span>
        </div>
        <span className="font-light text-xs">
          Bill to the same address
          <button
            onClick={() => setShowModal(true)}
            onClose={() => setShowModal(false)}
            className="btn btn-active btn-link font-light text-xs"
            style={{ textDecoration: "none", fontSize: "inherit" }}
          >
            Edit
          </button>
        </span>
        <div>
          <span className="font-light text-xs">
            Email to aasgfmily@gmail.com
          </span>
        </div>
        <Modal isVisible={showModal} onClose={closeModal}>
          <div className="p-6">
            <UserForm></UserForm>
          </div>
        </Modal>
      </section>
    </Fragment>
  );
};

export default UserInfo;
