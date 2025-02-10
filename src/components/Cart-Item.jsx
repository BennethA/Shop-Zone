/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { BiXCircle } from "react-icons/bi";

export default function CartItem({ item, handleDelete, handleQuantityChange }) {
  return (
    <div
      key={item.id}
      className="rounded-sm h-[100px] flex gap-2 items-center border bg-[#b1b1b173] px-2 p-1"
    >
      <div className="w-[60px] h-[80px] border-2 rounded-sm flex items-center justify-center overflow-hidden bg-white">
        <img
          src={item.image_url}
          alt={item.name}
          className="rounded-sm text-black"
        />
      </div>
      <div className="font-bold flex items-center flex-col text-center">
        <Link
          to={`/productInformation/${item.id}`}
          className="active:text-[#6d6d6d]-950 hover:text-[#6d6d6d]"
        >
          <p>
            {item.name.length <= 15 ? item.name : item.name.slice(0, 13)} ...
          </p>
        </Link>
        <div className="flex items-center gap-2">
          <div>
            <p>${item.price.toFixed(2)}</p>
          </div>
          <input
            min="1"
            type="number"
            value={Number(item.quantity)}
            onChange={(e) => handleQuantityChange(item, e)}
            className="w-10 px-[1px] border border-[#6d6d6d] rounded text-black outline-none"
          />
        </div>
      </div>
      <BiXCircle
        onClick={() => handleDelete(item)}
        className="text-white text-2xl cursor-pointer hover:opacity-80"
      />
    </div>
  );
}
