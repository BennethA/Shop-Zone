import { useState } from "react";
import { useContext } from "react";
import DataContext from "../Context/DataContext";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const { email, setEmail, errors, setErrors } = useContext(DataContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{15}$/;
    const registeredUsers = localStorage.getItem("registeredUsers");

    if (registeredUsers) {
      const parsedUsers = JSON.parse(registeredUsers);
      const foundUser = parsedUsers.find(
        (user) => user.email === email && user.password === oldPassword
      );

      if (foundUser && passwordRegex.test(newPassword)) {
        foundUser.password = newPassword; // Update the password
        localStorage.setItem("registeredUsers", JSON.stringify(parsedUsers)); // Update localStorage
        setEmail("");
        setErrors("");
        navigate("/shop");
        setOldPassword("");
        setNewPassword("");
      } else if (!passwordRegex.test(newPassword)) {
        setErrors("Type a valid new password");
      } else {
        setErrors("User not found");
      }
    }
  };

  return (
    <div className={`flex items-center justify-center pt-[55px] pb-7`}>
      <form
        onSubmit={handleChangePassword}
        className="flex flex-col items-center flex-wrap gap-5 "
      >
        <div className="flex flex-col gap-5 items-center justify-center">
          <input
            required
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe123@gmail.com"
            className="rounded-md border border-[#6d6d6d] bg-white py-2 px-3 font-medium text-[gray] outline-none max-w-[220px]"
          />

          <input
            required
            maxLength="15"
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Old Password"
            className="rounded-md border border-[#6d6d6d] bg-white py-2 px-3 text-base font-medium text-[gray] outline-none max-w-[220px]"
          />

          <input
            required
            id="newPassword"
            maxLength="10"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className="rounded-md border border-[#6d6d6d] bg-white py-2 px-3 text-base font-medium text-[gray] outline-none max-w-[220px]"
          />
        </div>
        {errors && <div className="text-red-600 font-semibold">{errors}</div>}

        <button
          type="submit"
          className="hover:opacity-80 rounded-md bg-[#6d6d6d] py-2 px-6 font-semibold text-white outline-none mt-2"
        >
          Reset Password
        </button>

        <Link to="/login" className="cursor-pointer hover:text-[blue]">
          Go to Login
        </Link>
      </form>
    </div>
  );
}
