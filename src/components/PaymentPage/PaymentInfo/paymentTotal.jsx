const PaymentTotal = ({ totalAmount }) => {
  return (
    <section className="shadow-xl border py-5 px-2 dark:text-white rounded">
      <div className="px-5">
        <p className="font-semibold mt-3">Order Summary</p>
        <div className="flex justify-between">
          <div>Total Amount:</div>
          <div>${totalAmount}</div>
        </div>
      </div>
    </section>
  );
};

export default PaymentTotal;
