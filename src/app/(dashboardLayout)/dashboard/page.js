"use client";
import AdminDashboard from "@/components/Dashboard/Admin/AdminDashboard/AdminDashboard";
import getUserData from "@/data/getUserData";

const dashboardPage = () => {
  const user = getUserData();
  return user?.role === "admin" ? (
    <section>
      <AdminDashboard />
    </section>
  ) : (
    <></>
  );
};

export default dashboardPage;
