import UserRecentOrdersTable from "./UserRecentOrdersTable";

const UserRecentOrders = ({ MyOrders }) => {
  return (
    <div
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      className="overflow-x-auto mt-10 border rounded-xl p-4 shadow mb-5"
    >
      <h3 className="text-lg font-semibold mb-1">Recent Orders</h3>

      <UserRecentOrdersTable ordersData={MyOrders} />
    </div>
  );
};

export default UserRecentOrders;
