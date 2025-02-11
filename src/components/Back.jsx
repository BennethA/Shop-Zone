import { Link } from "react-router-dom";
import { BiLeftArrowCircle } from "react-icons/bi";

export default function Back() {
  return (
    <Link
      to="/shop"
      className={`text-xl fixed border-2 px-2 py-[6.2px] rounded-sm mt-1 transition-all duration-200 z-50 border-black hover:text-white hover:bg-black bg-white`}
    >
      <BiLeftArrowCircle />
    </Link>
  );
}
