import Categories from "@/components/Home/Categories/Categories";
import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <Categories></Categories>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default PrimaryLayout;
