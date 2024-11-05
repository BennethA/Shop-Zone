import { useContext, useState } from "react";
import DataContext from "../Context/DataContext";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

export default function PlaceOrder() {
  const navigate = useNavigate();
  const { cart } = useContext(DataContext);

  const paymentOptions = [
    {
      id: 1,
      name: "MTN Mobile Money",
      type: "mobile_money",
      logo: "(link unavailable)",
    },
    {
      id: 2,
      name: "Telecel Money",
      type: "mobile_money",
      logo: "(link unavailable)",
    },
    {
      id: 3,
      name: "Visa",
      type: "credit_card",
      logo: "(link unavailable)",
    },
    {
      id: 4,
      name: "PayPal",
      type: "online_payment",
      logo: "(link unavailable)",
    },
    {
      id: 5,
      name: "Cash on Delivery",
      type: "cod",
      logo: "(link unavailable)",
    },
  ];

  const [selectedPayment, setSelectedPayment] = useState("");

  return (
    <div
      className={`px-4 sm:p-[5vw] md:px-[7vw] lg:px-[9vw] pt-[55px] gap-2 flex flex-col pb-2`}
    >
      <Title text1="PLACE" text2="ORDER" />
      <div className="text-xl">Select Payment Option</div>
      <hr />
      <div className="flex gap-2 flex-wrap">
        {paymentOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedPayment(option)}
            className={`p-2 border-2 flex gap-2 items-center`}
          >
            {selectedPayment.name === option.name && (
              <div className={`w-3 h-3 rounded-full bg-green-700`}></div>
            )}
            {option.name}
          </button>
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <div className="font-bold text-2xl">
          ${cart.reduce(
            (total, product) => total + product.price * product.quantity,
            0
          ) + 10}
        </div>
        {cart.length > 1 ? "Items" : "Item"} ready to purchase
      </div>
      <button
        className={`bg-white border-2 text-black rounded-sm font-semibold px-3 py-2 hover:bg-black hover:text-white
        `}
        onClick={() => navigate("/orders")}
      >
        PURCHASE
      </button>
    </div>
  );
}
