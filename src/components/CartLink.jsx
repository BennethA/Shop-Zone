import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import DataContext from "../Context/DataContext";

export default function CartLink() {
  const { cart, logIn } = useContext(DataContext);

  return (
    <Link
      to={logIn ? "/cart" : "/login"}
      className={`mt-1 z-50 fixed right-4 sm:right-[5vw] md:right-[7vw] lg:right-[9vw] px-2 py-1 flex items-center gap-2 border-2 rounded-sm transition-all duration-200 border-black bg-white hover:bg-black hover:text-white      }`}
    >
      <FaCartShopping />
      <div className={`font-medium`}>{cart.length}</div>
    </Link>
  );
}
