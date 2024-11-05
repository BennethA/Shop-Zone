import { useContext } from "react";
import Back from "../components/Back";
import PRODUCTS from "../Products.json";
import Title from "../components/Title";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../Context/DataContext";

export default function Product() {
  const { handleItem, existingCart, logIn } =
    useContext(DataContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const item = PRODUCTS.find((product) => product.id === Number(id));

  // const [changeImage, setChangeImage] = useState("");

  return (
    <div>
      <Back />
      <main
        className={`pb-4 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-[55px] flex flex-col gap-3`}
      >
        <Title text1="PRODUCT" text2="DETAILS:" />
        {/* <div className="flex gap-2">
          {item.image_url.map((img) => (
            <div
              key={img}
              onClick={() => setChangeImage(img)}
              className="h-[100px] bg-white w-[100px] flex items-center justify-center rounded overflow-hidden cursor-pointer"
            >
              <img
                src={img}
                alt={img}
                className="h-full hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </div> */}

        <div className="rounded-md overflow-hidden flex items-center justify-center">
          <img
            loading="lazy"
            alt={item.name}
            className="rounded-md"
            src={item.image_url}
            // src={changeImage ? changeImage : item.image_url[0]}
          />
        </div>

        <div className="text-center text-3xl font-bold text-gray-500 underline">
          {item.name}
        </div>

        {item.description && (
          <div className="font-semibold leading-none">{item.description}</div>
        )}

        <div className="font-bold text-2xl text-gray-500">
          Price: ${item.price.toFixed(2)}
        </div>

        {existingCart.some((existingItem) => existingItem.id === item.id) ? (
          <button
            className={`text-white rounded-sm font-semibold border-2 px-3 py-2 bg-black`}
          >
            Added
          </button>
        ) : (
          <button
            onClick={() => {
              logIn ? handleItem(item) : navigate("/login");
            }}
            className={`bg-white border-2 text-black rounded-sm font-semibold px-3 py-2 hover:bg-[gray] hover:text-white`}
          >
            Add to cart
          </button>
        )}
      </main>
    </div>
  );
}
