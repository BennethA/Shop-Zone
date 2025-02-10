import { useContext } from "react";
import { FaX } from "react-icons/fa6";
import DataContext from "../Context/DataContext";

export default function Search() {
  const { filter, setFilter, openSearch, setOpenSearch } =
    useContext(DataContext);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchClose = () => {
    setOpenSearch(!openSearch);
  };

  return (
    openSearch && (
      <form
        className={`flex items-center justify-center gap-2 my-2 border-y border-slate-400 bg-[#00000013] p-3`}
      >
        <label className="sr-only" htmlFor="search-input">
          Search for product type
        </label>
        <input
          id="search-input"
          type="search"
          value={filter}
          onChange={handleFilterChange}
          className="w-full max-w-[600px] outline-none p-4 font-bold py-2 rounded-full text-gray-600 border-2"
        />
        <FaX
          className="hover:opacity-80 cursor-pointer"
          onClick={handleSearchClose}
        />
      </form>
    )
  );
}
