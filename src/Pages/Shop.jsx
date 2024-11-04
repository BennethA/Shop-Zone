/* eslint-disable react/prop-types */
import { useContext } from "react";
import DataContext from "../Context/DataContext";
import Title from "../components/Title";
import Products from "../components/Products";
import FilterNav from "../components/FilterNav";
import Search from "../components/Search";

export default function Shop() {
  const { changeContrast } = useContext(DataContext);
  return (
    <main className={`pt-[55px] pb-2 ${changeContrast && "bg-black"}`}>
      <Title text1="AVAILABLE" text2="PRODUCTS" />
      <Search />
      <FilterNav />
      <Products />
    </main>
  );
}
