import { useContext } from "react";
import DataContext from "../Context/DataContext";

export default function Home() {
  const { changeContrast } = useContext(DataContext);

  const services = [
    {
      id: 1,
      name: "Free Shipping",
      description: "Free Shipping on all order",
    },
    {
      id: 2,
      name: "Customer Support 24/7",
      description: "Instant access to support",
    },
    {
      id: 3,
      name: "100% Secure Payment",
      description: "We ensure your money is save",
    },
    {
      id: 4,
      name: "Money Back Guarantee",
      description: "30 Days Money Back Guarantee",
    },
  ];
  
  return (
    <main
      className={`p-3 flex justify-center flex-col gap-9 pt-[55px]`}
    >
      <div className="2xl:w-[60%] xl:w-[70%] lg:w-[80%] md:w-[60%] w-[90%] gap-8 flex flex-col justify-center">
        <div className="w-[100%] sm:w-[80%]">
          <p
            className={`font-semibold text-4xl text-black leading-[45px] ${
              changeContrast ? "text-white" : "text-black"
            }`}
          >
            DISCOVER IT ALL, FROM CLOTHING TO JEWELRY AND MORE
          </p>
        </div>
        <div className="sm:w-[60%] w-[100%]">
          <p className="font-bold leading-[20px] text-gray-500">
            Shop-Zone is like having your favorite store in your pocket and on
            the internet. It brings the world of online shopping right to your
            fingertips, making it easier than ever to find and purchase the
            things you love.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        {services.map((service) => (
          <div key={service.id}>
            <p
              className={`border-[2px] rounded-md px-1 font-semibold text-center  ${
                changeContrast
                  ? " border-[gray] text-white"
                  : " border-black text-black"
              }`}
            >
              {service.name}
            </p>
            <p className="text-[#363636]">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
