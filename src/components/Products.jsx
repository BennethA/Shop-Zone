/* eslint-disable react-hooks/exhaustive-deps */
import PRODUCTS from "../Products.json";
import { FaStar } from "react-icons/fa6";
import DataContext from "../Context/DataContext";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

export default function Products() {
  const {
    filter,
    logIn,
    handleItem,
    existingCart,
    sortType,
    setSortType,
    prevPageNumber,
    setPrevPageNumber,
    nextPageNumber,
    setNextPageNumber,
  } = useContext(DataContext);

  const navigate = useNavigate();
  const [products, setProducts] = useState(PRODUCTS);

  useEffect(() => {
    const filteredProducts = PRODUCTS.filter(
      (product) =>
        product.category.toLowerCase().includes(filter.toLowerCase()) ||
        product.name.toLowerCase().includes(filter.toLowerCase()) ||
        (product.gender &&
          product.gender.toLowerCase().includes(filter.toLowerCase()))
    );

    setProducts(filteredProducts);
  }, [filter]);

  useEffect(() => {
    let sortedProducts = [...products];
    switch (sortType) {
      case "high-low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "low-high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "random":
        sortedProducts.sort(() => Math.random() - 0.5);
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
  }, [sortType]);

  const previousPage = () => {
    if (prevPageNumber > 0) {
      setPrevPageNumber(prevPageNumber - 15);
      setNextPageNumber(nextPageNumber - 15);
    }
  };

  const nextPage = () => {
    if (nextPageNumber <= products.length) {
      setPrevPageNumber(prevPageNumber + 15);
      setNextPageNumber(nextPageNumber + 15);
    }
  };

  return (
    <div>
      <select
        onClick={(e) => setSortType(e.target.value)}
        className={`rounded p-1 cursor-pointer hover:opacity-80 my-7 border-2`}
      >
        <option value="random">Random</option>
        <option value="low-high">Sort price by: Low-high</option>
        <option value="high-low">Sort price by: High-low</option>
      </select>
      <main className="flex sm:gap-7 gap-3 flex-wrap justify-center pt-2">
        {products.length > 0 ? (
          products.slice(prevPageNumber, nextPageNumber).map((product) => (
            <div
              key={product.id}
              className="sm:w-[200px] w-[150px] relative border-2 px-1 rounded-lg flex flex-col pb-1 hover:bg-[#a3a3a36e]"
            >
              <Link to={`/productInformation/${product.id}`}>
                <div className="h-[250px] bg-white rounded-lg overflow-hidden flex items-center mb-1 relative">
                  <img
                    loading="lazy"
                    alt={product.name}
                    src={product.image_url}
                    className="rounded-lg text-center hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div
                  className={`border-2 px-2 font-bold rounded-[10px] text-center hover:text-[#383838]`}
                >
                  <p>
                    {product.name.length <= 15
                      ? product.name
                      : product.name.slice(0, 17)}
                    ...
                  </p>
                </div>
                <div
                  className={`font-bold text-center text-[#1F1F1F] flex justify-between items-center mx-2`}
                >
                  <p>${product.price.toFixed(2)}</p>
                  <div className={`font-bold flex items-center gap-[2px]`}>
                    <p>{product.rating.toFixed(1)}</p>
                    <FaStar className="text-[gold]" />
                  </div>
                </div>
              </Link>
              {existingCart.some((item) => item.id === product.id) ? (
                <button
                  className={`text-white rounded-sm font-semibold border-2 bg-black`}
                >
                  Added
                </button>
              ) : (
                <button
                  onClick={() => {
                    logIn ? handleItem(product) : navigate("/login");
                  }}
                  className={`bg-white border-2 text-black rounded-sm font-semibold hover:bg-[gray] hover:text-white`}
                >
                  Add to cart
                </button>
              )}
            </div>
          ))
        ) : (
          <div className="font-bold text-center text-[#535353]">
            <p>No Products Available</p>
          </div>
        )}
      </main>
      <div className="mt-9 flex gap-2 items-center justify-center text-xl">
        {prevPageNumber > 0 && (
          <button
            className="bg-slate-500 rounded p-1 text-white hover:opacity-80 px-5"
            onClick={previousPage}
          >
            Previous
          </button>
        )}
        {nextPageNumber <= products.length && (
          <button
            className="bg-slate-500 rounded p-1 text-white hover:opacity-80 px-5"
            onClick={nextPage}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
