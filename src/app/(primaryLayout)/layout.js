import Categories from "@/components/Home/Categories/Categories";
import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>

      <main className="px-3 md:px-0 mt-5">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default PrimaryLayout;
