import { useContext } from "react";
import DataContext from "../Context/DataContext";
import { FaRegCircleDot } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const {
    email,
    errors,
    setEmail,
    setLogIn,
    password,
    setErrors,
    setPassword,
    setLoginDetails,
  } = useContext(DataContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const registeredUsers = localStorage.getItem("registeredUsers");

    if (registeredUsers) {
      const parsedUsers = JSON.parse(registeredUsers);
      const foundUser = parsedUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        setLoginDetails({
          name: foundUser.name,
          email,
          password,
          country: foundUser.selectedCountry,
          city: foundUser.selectedCity,
          phoneNumber: foundUser.phoneNumber,
        });
        setErrors("");
        setLogIn(true);
        navigate("/shop");
      } else {
        setErrors("User not found");
      }
    } else {
      setErrors("No registered users. Create a new account and try again.");
    }
  };

  return (
    <main className={`flex items-center justify-center pt-[55px] pb-7`}>
      <div className="text-center max-w-[400px]">
        <div className="text-lg font-bold mb-2 gap-1 flex flex-col">
          <p>Please Login Here!</p>
          <div className="flex justify-center gap-2">
            <FaRegCircleDot className="text-xs" />
            <FaRegCircleDot className="text-xs" />
            <FaRegCircleDot className="text-xs" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-wrap items-center justify-center gap-5"
        >
          <div className="flex flex-col gap-5 items-center justify-center">
            <input
              required
              id="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-md border border-[#6d6d6d] bg-white py-2 px-3 font-medium text-[gray] outline-none max-w-[220px]"
            />
            <input
              required
              id="password"
              maxLength="15"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-md border border-[#6d6d6d] bg-white py-2 px-3 text-base font-medium text-[gray] outline-none max-w-[220px]"
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center justify-center">
            <Link to="/forgotPassword" className="hover:text-[blue]">
              Forgot password?
            </Link>

            <Link to="/register" className="cursor-pointer hover:text-[blue] ">
              Don`t have an account.
            </Link>
          </div>

          {errors && <div className="text-red-600 font-semibold">{errors}</div>}

          <button
            type="submit"
            className="hover:opacity-80 rounded-sm bg-[#6d6d6d] py-2 px-6 font-semibold text-white outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
