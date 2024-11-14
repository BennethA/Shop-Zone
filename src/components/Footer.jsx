import { BiAt, BiCopyright } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer
      className={`border-t-2 py-1 flex flex-wrap items-center sm:gap-0 gap-2 bg-blac bottom-0 right-0 left-0 h-[150px] justify-between`}
    >
      <div className="w-full sm:w-1/4">
        <Link to="/" className="font-extrabold text-xl font cursor-pointer">
          SHOP-ZONE
        </Link>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit recusandae
          animi debitis minima tenetur maxime doloribus vitae.
        </p>
      </div>
      <div className="flex items-center w-full sm:w-3/4 sm:justify-end flex-wrap">
        <BiCopyright className="mr-1" />
        Copyright <BiAt className="ml-1"/> shop-zone-eta.vercel.app | All rights reserved 2024
      </div>
    </footer>
  );
}
