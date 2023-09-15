import MyAllOrdersTable from "./MyAllOrdersTable";

const MyOrderPage = () => {
  return (
    <>
      <section className="mt-5 px-2">
        <h3 className="text-3xl font-bold mb-5 md:text-start text-center">
          My Orders
        </h3>
        <MyAllOrdersTable />
      </section>
    </>
  );
};

export default MyOrderPage;
