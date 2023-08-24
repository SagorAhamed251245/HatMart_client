import Image from "next/image";
import Logo from "../../../assets/icons/logo_typography.png";
import {FaRegPaperPlane, FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa"
import {MdKeyboardArrowRight} from "react-icons/md"
const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="w-[90%] mx-auto h-[50vh] flex items-center justify-between">
        {/* section 1 */}
        <section className="">
          <div className="h-14 w-48 relative">
            <Image src={Logo} alt={"Footer Logo"} fill />
          </div>
          <p className="text-gray-300 text-sm font-sans italic">"Hatmart is your one-stop for all your grocery needs."</p>

          {/* news letter */}
          <div className="flex my-3">
            <div className="py-2 rounded-s-full px-3 w-fit border-2 border-orange-500">
              <input
                className="bg-transparent w-fit"
                type="text"
                placeholder="Enter your email here"
              />
            </div>
            <button className="hover:text-orange-600  text-white bg-orange-600 duration-300 hover:bg-transparent border-2 border-orange-600 -ml-[2px] px-4 rounded-e-full">
              <FaRegPaperPlane />
            </button>
          </div>
          <span className="text-sm text-gray-400 ">Subscribe for our newsletter <br /> by entering your Email address</span>
          {/* socials */}
          <div className="mt-5 flex gap-6">
            <div className="text-orange-600 border-2 duration-300 hover:bg-orange-600 hover:text-white cursor-pointer border-orange-600 p-3 w-fit rounded-full">
            <FaFacebookF />
            </div>
            <div className="text-orange-600 border-2 duration-300 hover:bg-orange-600 hover:text-white cursor-pointer border-orange-600 p-3 w-fit rounded-full">
            <FaTwitter />
            </div>
            <div className="text-orange-600 border-2 duration-300 hover:bg-orange-600 hover:text-white cursor-pointer border-orange-600 p-3 w-fit rounded-full">
            <FaLinkedinIn />
            </div>
          </div>
        </section>
        <section>
           {/* title */}
           <h4 className="text-white font-semibold">Information</h4>
           <div className="text-gray-500">
            <div className="flex items-center my-3" >
                <MdKeyboardArrowRight className="text-orange-600" />
                <span className="text-sm">About us</span>
            </div>
            <div className="flex items-center my-3" >
                <MdKeyboardArrowRight className="text-orange-600" />
                <span className="text-sm">Privacy Policy</span>
            </div>
            <div className="flex items-center my-3" >
                <MdKeyboardArrowRight className="text-orange-600" />
                <span className="text-sm">Terms & condtions</span>
            </div>
            <div className="flex items-center my-3" >
                <MdKeyboardArrowRight className="text-orange-600" />
                <span className="text-sm">FAQ</span>
            </div>
            
           </div>
        </section>
        <section>
           {/* title */}
           <h4 className="text-white font-semibold">Contact Info</h4>
           <div className="text-gray-500">
            <div className="flex items-center my-3" >
                <MdKeyboardArrowRight className="text-orange-600" />
                <span className="text-sm">Phone: <span className="text-white">+88038383838</span></span>
            </div>
            <div className="flex items-center my-3" >
                <MdKeyboardArrowRight className="text-orange-600" />
                <span className="text-sm">Email: <span className="text-white">hatmart01@gmail.com</span></span>
            </div>
            <div className="flex items-center my-3" >
                <MdKeyboardArrowRight className="text-orange-600" />
                <span className="text-sm">Address: <span className="text-white">13/1, Road No-5, Mirpur Road.</span></span>
            </div>
            <div className="flex items-center my-3" >
                <MdKeyboardArrowRight className="text-orange-600" />
                <span className="text-sm">Website: <span className="text-white">https://hat-mart-client.vercel.app</span></span>
            </div>
            
           </div>
        </section>
        <section>
           <h4 className="text-white font-semibold">Payment</h4>
           <div className="flex w-[300px] my-3 gap-4">

              <div className="h-[40px] w-[100px] relative">
                <Image  className="object-cover object-center rounded" src={'https://i.ibb.co/2yDCqkG/bkash.png'} alt="payment methods" fill />
              </div>
              <div className="h-[40px] w-[100px] relative">
                <Image className="object-cover object-center rounded"  src={'https://i.ibb.co/xjhcMQ3/cashon-Delivery.png'} alt="payment methods" fill />
              </div>
           </div>
           <div className="flex w-[300px] my-3 gap-4">

              <div className="h-[30px] w-[90px] relative">
                <Image  className="object-cover object-center rounded" src={'https://i.ibb.co/3C2cSWY/maestro.jpg'} alt="payment methods" fill />
              </div>
              <div className="h-[30px] w-[90px] relative">
                <Image className="object-cover object-center rounded"  src={'https://i.ibb.co/gFykXmw/master-Card.jpg'} alt="payment methods" fill />
              </div>
              <div className="h-[30px] w-[90px] relative">
                <Image className="object-cover object-center rounded"  src={'https://i.ibb.co/0GKgHfb/visaCard.png'} alt="payment methods" fill />
              </div>
           </div>
        </section>
      </div>
      <div className="bg-gray-500 py-3 text-gray-900 text-sm font-semibold text-center">
          <p>@copyright all rights preserved by hatmart</p>
      </div>
    </footer>
  );
};

export default Footer;
