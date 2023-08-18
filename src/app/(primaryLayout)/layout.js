import Categories from "@/components/Home/Categories/Categories";
import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";
import Providers from "@/providers";

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <Providers>
        <NavBar></NavBar>
        <main>{children}</main>
        <Footer></Footer>
      </Providers>
    </>
  );
};

export default PrimaryLayout;
