/* eslint-disable react/prop-types */
import { BiMailSend } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { PiTwitterLogo } from "react-icons/pi";
import { createContext, useEffect, useState } from "react";
const DataContext = createContext({});

export function DataProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [filter, setFilter] = useState("");
  const [logIn, setLogIn] = useState(false);
  const [password, setPassword] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [loginDetails, setLoginDetails] = useState({});
  const [openPurchase, setOpenPurchase] = useState(false);
  const [registerDetails, setRegisterDetails] = useState({});
  const [changeContrast, setChangeContrast] = useState(true);

  const storedCart = localStorage.getItem("cart");
  const existingCart = storedCart ? JSON.parse(storedCart) : [];

  const handleItem = (item) => {
    let existingItem = existingCart.find((product) => product.id === item.id);

    if (existingItem) {
      handleDelete(existingItem);
      // Item already exists in cart, do nothing
      return;
    } else {
      // Add item to cart
      const newItem = {
        ...item,
        addedDate:
          new Date().toDateString() +
          " " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes(),
      };
      existingCart.push(newItem);
      localStorage.setItem("cart", JSON.stringify(existingCart));
      setCart(existingCart);
    }
  };

  const handleDelete = (item) => {
    const updatedCart = cart.filter((cart) => cart.id !== item.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const socials = [
    {
      id: 1,
      link: "http://wa.me/0508529031",
      icon: <FaWhatsapp />,
      name: "Whatsapp",
    },
    {
      id: 2,
      link: "http://www.twitter.com/dev_roi",
      icon: <PiTwitterLogo />,
      name: "Twitter(X)",
    },
    {
      id: 3,
      link: "mailto:addobenneth6@gmail.com",
      icon: <BiMailSend />,
      name: "GMAIL",
    },
  ];

  const categories = [
    {
      name: "Male",
    },
    {
      name: "Female",
    },
    {
      name: "Perfume",
    },
    {
      name: "Accessories",
    },
    {
      name: "Shorts",
    },
    {
      name: "Winterwear",
    },
    {
      name: "Pants",
    },
    {
      name: "Sweaters",
    },
    {
      name: "Pajamas",
    },
    {
      name: "Socks",
    },
    {
      name: "Hats",
    },
    {
      name: "Skirts",
    },
    {
      name: "Swimwear",
    },
    {
      name: "Outerwear",
    },
    {
      name: "Jeans",
    },
    {
      name: "Clothing",
    },
    {
      name: "Footwear",
    },
    {
      name: "Gown",
    },
  ];
  return (
    <DataContext.Provider
      value={{
        socials,
        logIn,
        setLogIn,
        filter,
        setFilter,
        cart,
        setCart,
        handleDelete,
        loginDetails,
        setLoginDetails,
        registerDetails,
        setRegisterDetails,
        handleItem,
        existingCart,
        changeContrast,
        setChangeContrast,
        categories,
        openSearch,
        setOpenSearch,
        openPurchase,
        setOpenPurchase,
        email,
        setEmail,
        password,
        setPassword,
        errors,
        setErrors,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
