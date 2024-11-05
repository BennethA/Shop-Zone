import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Orders from "./Pages/Orders";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";
import ContactUs from "./Pages/ContactUs";
import ErrorPage from "./Pages/ErrorPage";
import PlaceOrder from "./Pages/PlaceOrder";
import CartLink from "./components/CartLink";
import Product from "./Pages/ProductInformation";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";
import UserInformation from "./Pages/UserInformation";
export default function App() {
  // localStorage.clear()
  return (
    <div className={`px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] h-full`}>
      <TopNav />
      <CartLink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/productInformation/:id" element={<Product />} />
        <Route path="/userInformation" element={<UserInformation />} />
      </Routes>
      <Footer />
    </div>
  );
}
