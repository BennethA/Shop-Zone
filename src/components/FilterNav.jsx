import { useContext } from "react";
import DataContext from "../Context/DataContext";

export default function FilterNav() {
  const { filter, setFilter, categories } = useContext(DataContext);

  return (
    <div
      className={`flex overflow-x-auto border-2 rounded-t-[20px] scrollbar scrollbar-thumb-black`}
    >
      {categories.map((category) => {
        return (
          <button
            key={category.name}
            onClick={() => setFilter(category.name)}
            className={`border-x px-4 py-2 font-extrabold transition-all duration-500 hover:bg-[#00000041] ${
              filter.toLowerCase() === category.name.toLowerCase() &&
              `bg-black text-white`
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
