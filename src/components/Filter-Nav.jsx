import { useContext } from "react";
import DataContext from "../Context/DataContext";

export default function FilterNav() {
  const {
    filter,
    setFilter,
    categories,
    setPrevPageNumber,
    setNextPageNumber,
  } = useContext(DataContext);

  const handleFilterChange = (categoryName) => {
    setPrevPageNumber(0);
    setNextPageNumber(15);
    setFilter(categoryName);
  };

  return (
    <div
      className={`flex overflow-x-auto border-2 rounded-t-[20px] scrollbar scrollbar-thumb-black scrollbar-track-[#00000062]`}
    >
      {categories.map((category) => {
        return (
          <button
            key={category.name}
            onClick={() => handleFilterChange(category.name)}
            className={`border-x px-4 py-2 font-extrabold transition-all duration-500 ${
              filter.toLowerCase() === category.name.toLowerCase()
                ? `bg-black text-white`
                : `hover:bg-[#00000041] `
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
