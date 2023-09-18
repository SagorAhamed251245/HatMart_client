import Link from "next/link";
import React from "react";

const NavLink = ({ children, href }) => {
  return (
    <Link href={href} className="dark:text-white">
      {children}
    </Link>
  );
};

export default NavLink;
