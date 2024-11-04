import { useContext } from "react";
import DataContext from "../Context/DataContext";
import Title from "../components/Title";
import { Link, useNavigate } from "react-router-dom";

export default function UserInformation() {
  const { loginDetails, registerDetails, changeContrast, logIn, setLogIn } =
    useContext(DataContext);

  const navigate = useNavigate();
  return (
    <div
      className={`px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-[55px] pb-2 flex flex-col items-center justify-center gap-2 ${
        changeContrast ? "bg-black text-white" : "bg-white "
      }`}
    >
      <Title text1="USER" text2="INFORMATION" />

      {logIn ? (
        <div className="flex flex-col gap-2">
          <div>Name: {loginDetails.name || registerDetails.name}</div>
          <hr className="h-[1px] w-full opacity-60" />

          <div>Email: {loginDetails.email || registerDetails.email}</div>
          <hr className="h-[1px] w-full opacity-60" />

          <div>
            Country: {loginDetails.country || registerDetails.selectedCountry}
          </div>
          <hr className="h-[1px] w-full opacity-60" />

          <div>City: {loginDetails.city || registerDetails.selectedCity}</div>
          <hr className="h-[1px] w-full opacity-60" />

          <div>
            Phone Number:
            {loginDetails.phoneNumber || registerDetails.phoneNumber}
          </div>
          <hr className="h-[1px] w-full opacity-60" />

          <Link to="/orders" className="bg-gray-600 rounded-sm hover:opacity-80">
            Orders
          </Link>
          <hr className="h-[1px] w-full opacity-60" />
        </div>
      ) : (
        ""
      )}

      <button
        onClick={() => (logIn ? setLogIn(false) : navigate("/logIn"))}
        className="hover:opacity-80 rounded-sm bg-[#6d6d6d] active:bg-black py-2 px-6 font-semibold text-white outline-none"
      >
        {logIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}
