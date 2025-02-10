/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function UserInfo({ details }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="p-2">Name: {details.name}</div>
      <hr className="h-[1px] w-full opacity-60" />
      <div className="p-2">Email: {details.email}</div>
      <hr className="h-[1px] w-full opacity-60" />
      <div className="p-2">Country: {details.country}</div>
      <hr className="h-[1px] w-full opacity-60" />
      <div className="p-2">City: {details.city}</div>
      <hr className="h-[1px] w-full opacity-60" />
      <div className="p-2">Phone Number: {details.phoneNumber}</div>
      <hr className="h-[1px] w-full opacity-60" />
      <Link
        to="/orders"
        className="bg-gray-600 rounded-sm hover:opacity-80 text-white p-2"
      >
        Orders
      </Link>
      <hr className="h-[1px] w-full opacity-60" />
    </div>
  );
}
