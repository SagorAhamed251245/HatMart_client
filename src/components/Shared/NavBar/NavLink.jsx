import Link from "next/link";
import React from "react";

const NavLink = ({ children, href }) => {
  return <Link href={href}>{children}</Link>;
};

export default NavLink;
