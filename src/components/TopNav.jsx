import { CgHome } from "react-icons/cg";
import { PiSignIn } from "react-icons/pi";
import { LuContact } from "react-icons/lu";
import { useContext, useState } from "react";
import DataContext from "../Context/DataContext";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaStore, FaUserCheck } from "react-icons/fa6";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BiMenu, BiMoon, BiSearch, BiSun, BiUser, BiX } from "react-icons/bi";

export default function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const {
    logIn,
    openSearch,
    setOpenSearch,
    changeContrast,
    setChangeContrast,
  } = useContext(DataContext);

  const pages = [
    {
      id: 1,
      link: "/",
      name: "Home",
      icon: <CgHome />,
    },
    {
      id: 2,
      link: "/shop",
      name: "Shop",
      icon: <FaStore />,
    },
    {
      id: 3,
      link: "/about",
      name: "About",
      icon: <AiOutlineInfoCircle />,
    },
    {
      id: 4,
      link: "/contactUs",
      name: "Contact Us",
      icon: <LuContact />,
    },
    !logIn && {
      id: 5,
      link: "/login",
      name: "Login",
      icon: <PiSignIn />,
    },
  ];

  return (
    <nav
      className={`flex-wrap gap-2 ${
        changeContrast ? "bg-black text-white" : "bg-white"
      } z-[100] sticky right-0 left-0 top-0 flex justify-between py-3 items-center border-b-2`}
    >
      <Link to="/" className="font-extrabold text-xl font cursor-pointer">
        SHOP-ZONE
      </Link>
      <ul className="hidden sm:flex gap-3 font-semibold">
        {pages.map((page) => (
          <NavLink
            key={page.id}
            to={page.link}
            className={({ isActive }) =>
              `flex gap-[5px] items-center cursor-pointer font-bold hover:opacity-80 ${
                isActive ? "text-[gray] underline" : ""
              }`
            }
          >
            {page.icon}
            {page.name}
          </NavLink>
        ))}
      </ul>
      <div
        className={`sm:hidden fixed transition-all duration-500 top-[54px] translate-x-[-100%] left-0 w-[270px] px-[30px] py-[20px] text-[17px] font-semibold overflow-y-auto ${
          changeContrast ? "bg-black text-white" : "bg-white text-black"
        } border-r-2 bottom-0 ${
          openMenu ? "translate-x-[0%]" : ""
        }  scrollbar ${
          changeContrast ? "scrollbar-thumb-white" : "scrollbar-thumb-black"
        }`}
      >
        {pages.map((page) => (
          <NavLink
            onClick={handleOpenMenu}
            to={page.link}
            key={page.id}
            className={({ isActive }) =>
              `mt-6 flex gap-[5px] items-center cursor-pointer font-bold hover:opacity-80 ${
                isActive ? "text-[gray] underline" : ""
              }`
            }
          >
            {page.icon}
            {page.name}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {location.pathname === "/shop" && (
          <BiSearch
            className="hover:opacity-80 cursor-pointer"
            onClick={() => setOpenSearch(!openSearch)}
          />
        )}
        <button
          onClick={() => setChangeContrast(!changeContrast)}
          className="hover:opacity-80 text-xl"
        >
          {changeContrast ? <BiSun /> : <BiMoon />}
        </button>
        <div
          onClick={() =>
            logIn ? navigate("/userInformation") : navigate("/login")
          }
          className={`rounded-full cursor-pointer ${
            changeContrast
              ? "hover:text-black hover:bg-white"
              : "hover:text-white hover:bg-black"
          }`}
        >
          {logIn ? <FaUserCheck /> : <BiUser />}
        </div>
        <div
          onClick={handleOpenMenu}
          className={`sm:hidden text-2xl cursor-pointer hover:opacity-80 ${
            changeContrast ? "text-white" : "text-black"
          } `}
        >
          {openMenu ? <BiX /> : <BiMenu />}
        </div>
      </div>
    </nav>
  );
}
