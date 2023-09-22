import SideBar from "@/components/Shared/SideBar/SideBar";

const dashboardPage = ({ children }) => {
  return (
    <main className="w-full lg:flex relative dark:text-white lg:static">
      {/* <SideBar /> */}
      <SideBar></SideBar>
      <section className="lg:w-[80%] w-full  min-h-screen  pt-5 px-5  md:pt-10 ">
        {children}
      </section>
    </main>
  );
};

export default dashboardPage;
