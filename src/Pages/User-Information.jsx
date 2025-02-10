import { useContext } from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import UserData from "../components/User-Data";
import DataContext from "../Context/DataContext";

export default function UserInformation() {
  const { loginDetails, registerDetails, logIn, setLogIn } =
    useContext(DataContext);

  const navigate = useNavigate();

  const details = logIn ? loginDetails : registerDetails;

  return (
    <div
      className={`px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pt-[55px] flex flex-col items-center justify-center gap-2 pb-7`}
    >
      <Title text1="USER" text2="INFORMATION" />

      {logIn && details ? <UserData details={details} /> : ""}

      <button
        onClick={() => (logIn ? setLogIn(false) : navigate("/logIn"))}
        className="hover:opacity-80 rounded-sm bg-[#6d6d6d] active:bg-black py-2 px-6 font-semibold text-white outline-none"
      >
        {logIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}
