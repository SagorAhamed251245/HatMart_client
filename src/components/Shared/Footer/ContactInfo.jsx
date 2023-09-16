import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import EmailLink from "./LinkItems/EmailLink";
import NumberLink from "./LinkItems/NumberLink";

const ContactInfo = () => {
  return (
    <>
      <section className="text-center lg:text-start">
        {/* title */}
        <h4 className="text-black font-semibold dark:text-white">
          Contact Info
        </h4>
        <div className="text-gray-800  flex flex-col lg:items-start items-center">
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm dark:text-white">
              Phone:{" "}
              <span className="text-gray-700">
                <NumberLink />
              </span>
            </span>
          </div>
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm dark:text-white">
              Email:{" "}
              <span className="text-gray-700">
                <EmailLink />
              </span>
            </span>
          </div>
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm dark:text-white">
              Address:{" "}
              <span className="text-gray-700 dark:text-white dark:hover:text-green-400">
                <Link
                  target="_blank"
                  href={"https://goo.gl/maps/cHNkd2AT3FJR9F428"}
                  className="hover:text-green-400 transition"
                >
                  13/1, Road No-5, Mirpur Road.
                </Link>
              </span>
            </span>
          </div>
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm dark:text-white">
              Website:{" "}
              <span className="text-gray-700 dark:text-white dark:hover:text-green-400">
                <Link
                  href={"https://hat-mart-client.vercel.app"}
                  target="_blank"
                  className="hover:text-green-400 transition"
                >
                  https://hat-mart-client.vercel.app
                </Link>
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
