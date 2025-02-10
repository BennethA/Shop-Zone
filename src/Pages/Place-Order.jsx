import Title from "../components/Title";
import { BiMoney } from "react-icons/bi";
import { BsPaypal } from "react-icons/bs";
import { SiVodafone } from "react-icons/si";
import { useContext, useState } from "react";
import { CgCreditCard } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import DataContext from "../Context/DataContext";
import PaymentOption from "../components/Payment-Option";

export default function PlaceOrder() {
  const navigate = useNavigate();
  const { cart } = useContext(DataContext);

  const paymentOptions = [
    {
      id: 1,
      name: "MTN Mobile Money",
      type: "mobile_money",
      logo: "",
    },
    {
      id: 2,
      name: "Telecel Money",
      type: "mobile_money",
      logo: <SiVodafone />,
    },
    {
      id: 3,
      name: "Visa",
      type: "credit_card",
      logo: <CgCreditCard />,
    },
    {
      id: 4,
      name: "PayPal",
      type: "online_payment",
      logo: <BsPaypal />,
    },
    {
      id: 5,
      name: "Cash on Delivery",
      type: "cod",
      logo: <BiMoney />,
    },
  ];

  const [selectedPayment, setSelectedPayment] = useState("");

  return (
    <div
      className={`px-4 sm:p-[5vw] md:px-[7vw] lg:px-[9vw] pt-[55px] gap-2 flex flex-col pb-7`}
    >
      <Title text1="PLACE" text2="ORDER" />
      <div className="text-xl">Select Payment Option</div>
      <hr />
      <div className="flex gap-2 flex-wrap">
        {paymentOptions.map((option) => (
          <PaymentOption
            key={option.id}
            option={option}
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
          />
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <div className="font-bold text-2xl">
          $
          {cart.reduce(
            (total, product) => total + product.price * product.quantity,
            0
          ) + 10}
        </div>
        {cart.length > 1 ? "Items" : "Item"} ready to purchase
      </div>
      <button
        className={`bg-white border-2 text-black rounded-sm font-semibold px-3 py-2 hover:bg-black hover:text-white ${
          selectedPayment ? "" : "opacity-50 cursor-not-allowed"
        }
        `}
        onClick={() => navigate("/orders")}
        disabled={!selectedPayment}
      >
        PURCHASE
      </button>
    </div>
  );
}
