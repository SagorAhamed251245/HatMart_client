import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import EmailLink from "./LinkItems/EmailLink";
import NumberLink from "./LinkItems/NumberLink";

const ContactInfo = () => {
  return (
    <>
      <section className="text-center lg:text-start">
        {/* title */}
        <h4 className="text-black font-semibold">Contact Info</h4>
        <div className="text-gray-800  flex flex-col lg:items-start items-center">
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm">
              Phone:{" "}
              <span className="text-gray-700">
                <NumberLink />
              </span>
            </span>
          </div>
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm">
              Email:{" "}
              <span className="text-gray-700">
                <EmailLink />
              </span>
            </span>
          </div>
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm">
              Address:{" "}
              <span className="text-gray-700">
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
            <span className="text-sm">
              Website:{" "}
              <span className="text-gray-700">
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
