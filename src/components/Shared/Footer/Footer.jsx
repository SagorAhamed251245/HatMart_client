import LogoSection from "./LogoSection";
import AboutSection from "./AboutSection";
import ContactInfo from "./ContactInfo";
import PaymentSectionFooter from "./PaymentSectionFooter";
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-transparent border shadow-2xl shadow-black">
      <div className="lg:w-[90%] md:[90%] w-full py-6 mx-auto flex lg:flex-row md:flex-col flex-col items-center lg:gap-0 gap-3 lg:justify-between justify-center">
        <LogoSection />
        <AboutSection />
        <ContactInfo />
        <PaymentSectionFooter />
      </div>
      <div className="bg-white dark:bg-transparent py-3 text-black dark:text-white border text-sm text-center">
        <p>@copyright all rights preserved by hatmart</p>
      </div>
    </footer>
  );
};

export default Footer;
