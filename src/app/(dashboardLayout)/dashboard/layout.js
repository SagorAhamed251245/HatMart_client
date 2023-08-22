import SideBar from "@/components/Shared/SideBar/SideBar";

const dashboardPage = ({ children }) => {
  return (
    <main className="w-full flex ">
      <SideBar />
      <section className="w-[95%] min-h-screen px-5 pt-5  md:px-10 md:pt-10 ">{children}</section>
    </main>
  );
};

export default dashboardPage;
