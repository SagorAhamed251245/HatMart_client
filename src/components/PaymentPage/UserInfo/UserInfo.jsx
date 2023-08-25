import React from "react";
import Userbname from "./Userbname";

import Useraddress from "./Useraddress";
import Userphone from "./Userphone";

const UserInfo = () => {
  return (
    <section className="shadow-xl border py-4 px-2 sm:px-4 md:px-6">
      <h2 className="pl-2 mb-5 sm:text-lg md:text-2xl font-semibold sm:text-center  text-[#34B701]">
        User Details
      </h2>
      <Userbname></Userbname>
      <Useraddress></Useraddress>
      <Userphone></Userphone>
    </section>
  );
};

export default UserInfo;
