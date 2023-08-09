import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <main>{children}</main>
      <footer> this is footer</footer>
      <Footer></Footer>
    </>
  );
};

export default PrimaryLayout;
