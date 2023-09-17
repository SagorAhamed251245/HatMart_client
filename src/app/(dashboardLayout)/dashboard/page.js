"use client";
import AdminDashboard from "@/components/Dashboard/Admin/AdminDashboard/AdminDashboard";
import UserDashboard from "@/components/Dashboard/User/UserDashboard/UserDashboard";
import getUserData from "@/data/getUserData";

const dashboardPage = () => {
  const user = getUserData();
  return user?.role === "admin" ? (
    <section>
      <AdminDashboard user={user} />
    </section>
  ) : user?.role === "user" ? (
    <section>
      <UserDashboard user={user} />
    </section>
  ) : null;
};

export default dashboardPage;
