import { useContext } from "react";
import DataContext from "../Context/DataContext";

export default function FilterNav() {
  const { filter, setFilter, categories, changeContrast } =
    useContext(DataContext);
    
  return (
    <div
      className={`flex overflow-x-auto border-2 rounded-t-[20px] scrollbar ${
        changeContrast ? "scrollbar-thumb-white" : "scrollbar-thumb-black"
      }`}
    >
      {categories.map((category) => {
        return (
          <button
            key={category.name}
            onClick={() => setFilter(category.name)}
            className={`border-x px-4 py-2 font-extrabold ${
              changeContrast ? "text-white" : "text-black"
            } hover:opacity-80 transition-all duration-500
              ${
                filter.toLowerCase() === category.name.toLowerCase() &&
                `${
                  changeContrast
                    ? "bg-[gray] text-black"
                    : "bg-black text-white"
                }`
              }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
