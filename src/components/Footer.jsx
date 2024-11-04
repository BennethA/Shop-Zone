import { useContext } from "react";
import DataContext from "../Context/DataContext";
import { BiAt, BiCopyright } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Footer() {
  const { changeContrast } = useContext(DataContext);

  return (
    <footer
      className={`border-t-2 py-7 flex flex-wrap items-center sm:gap-0 gap-2 fixed bg-black bottom-0 right-0 left-0 h-[200px px-4 sm:mx-[5vw] md:mx-[7vw] lg:mx-[9vw] justify-between ${
        changeContrast ? "text-white" : "bg-white"
      }`}
    >
      <div className="w-full sm:w-1/4">
        <Link to="/" className="font-extrabold text-xl font cursor-pointer">
          SHOP-ZONE
        </Link>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit recusandae
          animi debitis minima tenetur maxime doloribus vitae. Laborum
          architecto tempora at ex neque commodi? Eaque quam reiciendis illum
          voluptatem cumque assumenda dignissimos voluptate vitae.
        </p>
      </div>
      <div className="flex items-center justify-center w-full sm:w-3/4 sm:justify-end flex-wrap gap-1">
        <BiCopyright />
        Copyright <BiAt /> shop-zone-eta.vercel.app | All rights reserved 2024
      </div>
    </footer>
  );
}
