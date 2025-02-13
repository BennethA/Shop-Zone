import { Link } from "react-router-dom";
import { BiCopyright } from "react-icons/bi";

export default function Footer() {
  return (
    <footer
      className={`border-t-2 py-1 flex flex-wrap items-center h-[150px] justify-between`}
    >
      <div className="w-full sm:w-1/4 flex flex-col item-center">
        <Link to="/" className="font-extrabold text-xl font cursor-pointer">
          SHOP-ZONE
        </Link>
        <p className="text-sm text-gray-600">
          Your one-stop shop for all your needs.
        </p>
      </div>
      <div className="flex items-center w-full sm:w-3/4 sm:justify-end justify-center text-gray-700 text-sm">
        <BiCopyright />
        Copyright shop-zone-eta.vercel.app | All rights reserved 2024
      </div>
    </footer>
  );
}
