import { useContext } from "react";
import Back from "../components/Back";
import Title from "../components/Title";
import { BiXCircle } from "react-icons/bi";
import DataContext from "../Context/DataContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, setCart, handleDelete, changeContrast } =
    useContext(DataContext);

  const navigate = useNavigate();

  let totalAmount = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleQuantityChange = (item, e) => {
    const updatedQuantity = Number(e.target.value);

    const updatedCart = cart.map((product) =>
      product.id === item.id
        ? { ...product, quantity: updatedQuantity }
        : product
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <div>
      <Back />
      <main
        className={`pt-[55px] pb-2`}
      >
        <Title text1="YOUR" text2="CART" />
        <div className="flex gap-3 my-4 border-t-2 pt-3 overflow-x-auto">
          {cart.length > 0 ? (
            cart.map((cart) => (
              <div
                key={cart.id}
                className="rounded-sm h-[100px] flex gap-2 items-center border bg-[#b1b1b173] px-2 p-1"
              >
                <div className="w-[60px] h-[80px] border-2 rounded-sm flex items-center justify-center overflow-hidden bg-white">
                  <img
                    src={cart.image_url}
                    alt={cart.name}
                    className="rounded-sm text-black"
                  />
                </div>
                <div className=" font-bold flex items-center flex-col text-center">
                  <Link
                    to={`/productInformation/${cart.id}`}
                    className="active:text-[#6d6d6d]-950 hover:text-[#6d6d6d]"
                  >
                    <p>
                      {cart.name.length <= 15
                        ? cart.name
                        : cart.name.slice(0, 13)}
                      ...
                    </p>
                  </Link>
                  <div className="flex items-center gap-2">
                    <div>
                      <p>${cart.price.toFixed(2)}</p>
                    </div>
                    <input
                      min="1"
                      type="number"
                      value={Number(cart.quantity)}
                      onChange={(e) => handleQuantityChange(cart, e)}
                      className="w-10 px-[1px] border border-[#6d6d6d] rounded text-black outline-none"
                    />
                  </div>
                </div>
                <div
                  onClick={() => handleDelete(cart)}
                  className="cursor-pointer hover:opacity-80"
                >
                  <BiXCircle className="text-white text-2xl" />
                </div>
              </div>
            ))
          ) : (
            <div className="font-bold text-center w-full">
              <p>No Added Items</p>
            </div>
          )}
        </div>
        <div className="text-xl flex justify-between items-center flex-wrap gap-2">
          <div>
            {cart.length ? (
              <div>
                <div>
                  {cart.length > 1 ? "Products " : "Product "}
                  Total: ${totalAmount.toFixed(2)}
                  <hr />
                </div>
                <div>Delivery fee: $10.00</div>
                <hr />
              </div>
            ) : (
              ""
            )}
            <div className="font-bold">
              Total: ${(totalAmount + (cart.length && 10)).toFixed(2)}
            </div>
          </div>
          {cart.length > 0 && (
            <button
              onClick={() => navigate("/placeOrder")}
              className={`border-2 px-2 py-2 rounded-sm transition-all duration-200 ${
                changeContrast
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              PLACE ORDER
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
