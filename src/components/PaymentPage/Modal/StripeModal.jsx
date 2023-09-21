import ModalPayment from "@/components/Ui/ModalPayment";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/PaymentPage/PaymentInfo/CardPayment/CheckoutFrom";
const StripeModal = ({
  isOpen,
  setIsOpen,
  totalAmount,
  allProducts,
  stripePromise,
}) => {
  return (
    <ModalPayment isOpen={isOpen} setIsOpen={setIsOpen}>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          price={totalAmount}
          allProducts={allProducts}
          setIsOpen={setIsOpen}
        ></CheckoutForm>
      </Elements>
    </ModalPayment>
  );
};

export default StripeModal;
