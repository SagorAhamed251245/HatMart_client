import DemoSideBar from "@/components/Shared/SideBar/DemoSideBar";
import SideBar from "@/components/Shared/SideBar/SideBar";

const dashboardPage = ({ children }) => {
  return (
    <main className="w-full flex ">
      {/* <SideBar /> */}
      <DemoSideBar></DemoSideBar>
      <section className="md:w-[80%] min-h-screen  pt-5   md:pt-10 ">
        {children}
      </section>
    </main>
  );
};

export default dashboardPage;
