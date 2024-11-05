import Title from "../components/Title";
import Search from "../components/Search";
import Products from "../components/Products";
import FilterNav from "../components/FilterNav";

export default function Shop() {
  return (
    <main className={`pt-[55px] pb-2`}>
      <Title text1="AVAILABLE" text2="PRODUCTS" />
      <Search />
      <FilterNav />
      <Products />
    </main>
  );
}
