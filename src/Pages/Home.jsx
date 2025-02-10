import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
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
    <main className="p-3 flex justify-center flex-col gap-[50px] pt-[55px] pb-7">
      <Hero />
      <Services services={services} />
    </main>
  );
};

export default Home;
