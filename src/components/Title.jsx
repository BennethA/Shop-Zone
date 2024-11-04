/* eslint-disable react/prop-types */
import { useContext } from "react";
import DataContext from "../Context/DataContext";

export default function Title({ text1, text2 }) {
  const { changeContrast } = useContext(DataContext);
  
  return (
    <div
      className={`text-center sm:m-4 text-xl flex-wrap flex justify-center mb-2`}
    >
      <div className="flex gap-2 p-2 border-x-2">
        <h1 className="text-[#929292]">{text1} </h1>
        <h1 className={`${changeContrast && "text-white"}`}>{text2}</h1>
      </div>
    </div>
  );
}
