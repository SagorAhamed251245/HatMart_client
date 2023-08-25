import CheckButton from "./CheckButton";
import Pay from "./Pay";
import PaymentDate from "./PaymentDate";

const PaymentInfo = () => {
  return (
    <section className="shadow-xl border py-5 px-2">
      <h2 className="pl-2 md mb-5 sm:text-lg md:text-2xl text-[#FF7B13] sm:text-center text-2xl font-semibold">
        Cash On Delivery
      </h2>
      <Pay></Pay>
      <PaymentDate></PaymentDate>
      <CheckButton></CheckButton>
    </section>
  );
};

export default PaymentInfo;
