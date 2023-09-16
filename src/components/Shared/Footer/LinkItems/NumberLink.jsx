import Link from "next/link";

const NumberLink = () => {
  let mobileNumber = "01861573359";
  const link = "tel:" + mobileNumber.replace(/[^\d]/g, "");

  return (
    <Link
      href={link}
      className="hover:text-green-400 transition dark:text-white dark:hover:text-green-400"
      target="_blank"
    >
      {mobileNumber}
    </Link>
  );
};

export default NumberLink;
