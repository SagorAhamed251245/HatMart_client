import { MdKeyboardArrowRight } from "react-icons/md";

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
              Phone: <span className="text-gray-700">+88038383838</span>
            </span>
          </div>
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm">
              Email: <span className="text-gray-700">hatmart01@gmail.com</span>
            </span>
          </div>
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm">
              Address:{" "}
              <span className="text-gray-700">
                13/1, Road No-5, Mirpur Road.
              </span>
            </span>
          </div>
          <div className="flex items-center my-3">
            <MdKeyboardArrowRight className="text-orange-600" />
            <span className="text-sm">
              Website:{" "}
              <span className="text-gray-700">
                https://hat-mart-client.vercel.app
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
