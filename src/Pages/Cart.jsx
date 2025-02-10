import Back from "../components/Back";
import Title from "../components/Title";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/Cart-Item";
import DataContext from "../Context/DataContext";

export default function Cart() {
  const { cart, setCart, handleDelete } = useContext(DataContext);

  const navigate = useNavigate();

  const totalAmount = useMemo(() => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [cart]);

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
      <main className={`pt-[55px] pb-7`}>
        <Title text1="YOUR" text2="CART" />
        <div className="flex gap-3 my-4 border-t-2 pt-3 overflow-x-auto scrollbar scrollbar-thumb-black scrollbar-track-[#00000062]">
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                handleDelete={handleDelete}
                handleQuantityChange={handleQuantityChange}
              />
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
              className={`border-2 px-2 py-2 rounded-sm transition-all duration-200 hover:bg-black hover:text-white`}
            >
              PLACE ORDER
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
