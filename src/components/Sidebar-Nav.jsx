/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

export default function SidebarNav({ page, handleOpenMenu }) {
  return (
    <li className="flex">
      <NavLink
        onClick={handleOpenMenu}
        to={page.link}
        className={({ isActive }) =>
          `mt-6 flex gap-[5px] items-center cursor-pointer font-bold hover:opacity-80 ${
            isActive ? "text-black underline" : "text-[#474747]"
          }`
        }
      >
        {page.icon}
        {page.name}
      </NavLink>
    </li>
  );
}
