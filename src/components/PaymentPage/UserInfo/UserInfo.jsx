"use client";
import React, { Fragment, useState } from "react";

import Modal from "@/components/Modal";
import UserForm from "./UserForm";
import getUserData from "@/data/getUserData";

const UserInfo = () => {
  const [showModal, setShowModal] = useState(false);

  const user = getUserData();

  console.log("🚀 ~ file: UserInfo.jsx:13 ~ UserInfo ~ user:", user);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <Fragment>
      <section className="shadow-xl border py-4 px-2 sm:px-4 md:px-6">
        <h2 className="pl-2 mb-5 sm:text-lg md:text-2xl font-semibold sm:text-center  text-[#34B701]">
          Billing Address
        </h2>
        <p>
          <span className="font-light text-xs text-green-500">Name:</span>
          <span className="font-light text-xs">{user?.name} </span>
        </p>
        <div>
          <span className="font-light text-xs text-green-500">Email:</span>
          <span className="font-light text-xs">{user?.email}</span>
        </div>
        <div>
          <span className="font-light text-xs text-green-500">Address:</span>
          <span className="font-light text-xs">
            {user?.address ? user?.address : "Provide Your Address"}
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
          <span className="font-light text-xs text-green-500">
            Bill address:
          </span>
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
