"use client";

import Link from "next/link";

const EmailLink = () => {
  return (
    <Link
      href="mailto:hatmart01@gmail.com"
      className="hover:text-green-400 transition"
      target="_blank"
    >
      hatmart01@gmail.com
    </Link>
  );
};

export default EmailLink;
