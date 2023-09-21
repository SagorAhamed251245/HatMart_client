import NavBar from "@/components/Shared/NavBar/NavBar";
import HelpCard from "./HelpCard";
export const metadata = {
  title: "HatMat/helpCenter",
};
const Helpcategory = [
  {
    id: 0,
    help: "Products Issues",
    image:
      "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_order_v2._CB432205751_.png",
  },
  {
    id: 1,
    help: "Account Issues",
    image:
      "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2._CB432205751_.png",
  },
  {
    id: 2,
    help: "Delivery Issues",
    image:
      "https://png.pngtree.com/element_our/png/20180921/a-young-boy-riding-an-orange-delivery-scooter-png_105782.jpg",
  },
  {
    id: 3,
    help: "Payment Issues",
    image:
      "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2._CB432205751_.png",
  },
  {
    id: 4,
    help: "MemberShip subcription Issues",
    image:
      "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_account_v2._CB432205751_.png",
  },
  {
    id: 5,
    help: "Address, Security & privacy issues",
    image:
      "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2._CB432205751_.png",
  },
  {
    id: 6,
    help: "Something else?",
    image:
      "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_somethingelse_v3._CB428112012_.png",
  },
];

const HelpCenter = () => {
  return (
    <div>
      <section className="container mb-10 mx-auto">
        <h2 className=" font-extrabold text-2xl dark:text-white">
          Welcome to <span className="text-[#32B900]">Hat</span>
          <span className="text-[#FD7216]">Mart</span> Customer Service
        </h2>
        <p>
          What would you like help with today? You can quickly take care of most
          things here, or connect with us when needed.
        </p>
        {/* <h2 className="text-xl text-center font-bold text-[#FD7216]">How can i help you?</h2> */}
        <div className="dark:text-white grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Category cards --> */}
          {Helpcategory.map((card) => (
            <HelpCard key={card.id} CardData={card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
