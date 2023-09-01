
import LogoSection from "./LogoSection";
import AboutSection from "./AboutSection";
import ContactInfo from "./ContactInfo";
import PaymentSectionFooter from "./PaymentSectionFooter";
const Footer = () => {
  return (
    <footer className="bg-white border shadow-2xl shadow-black">
      <div className="lg:w-[90%] w-full py-6 mx-auto flex lg:flex-row flex-col items-center lg:gap-0 gap-3 lg:justify-between justify-center">
        <LogoSection />
        <AboutSection />
        <ContactInfo />
        <PaymentSectionFooter />
      </div>
      <div className="bg-white py-3 text-black border text-sm text-center">
        <p>@copyright all rights preserved by hatmart</p>
      </div>

    </footer>
  );
};

export default Footer;
