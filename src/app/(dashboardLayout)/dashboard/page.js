"use client";
import AdminDashboard from "@/components/Dashboard/Admin/AdminDashboard/AdminDashboard";
import UserDashboard from "@/components/Dashboard/User/UserDashboard/UserDashboard";
import getUserData from "@/data/getUserData";

const dashboardPage = () => {
  const user = getUserData();
  return user?.role === "admin" ? (
    <section>
      <AdminDashboard />
    </section>
  ) : (
    <>
      <UserDashboard />
    </>
  );
};

export default dashboardPage;
