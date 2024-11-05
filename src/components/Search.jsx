import { useContext } from "react";
import { FaX } from "react-icons/fa6";
import DataContext from "../Context/DataContext";

export default function Search() {
  const { filter, setFilter, openSearch, setOpenSearch } =
    useContext(DataContext);

  return (
    openSearch && (
      <form
        className={`flex items-center justify-center gap-2 my-2  border-y  border-slate-400 bg-[#00000013] p-3`}
      >
        <input
          type="search"
          value={filter}
          placeholder="Search for product type"
          onChange={(e) => setFilter(e.target.value)}
          className="w-full max-w-[600px] outline-none p-4 font-bold py-2 rounded-full text-gray-600 border-2"
        />
        <FaX
          className="hover:opacity-80 cursor-pointer"
          onClick={() => setOpenSearch(!openSearch)}
        />
      </form>
    )
  );
}
