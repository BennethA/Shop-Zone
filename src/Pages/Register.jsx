import { useState } from "react";
import { useContext, useEffect } from "react";
import DataContext from "../Context/DataContext";
import { FaRegCircleDot } from "react-icons/fa6";
import { Country, City } from "country-state-city";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const {
    email,
    errors,
    password,
    setLogIn,
    setEmail,
    setErrors,
    setPassword,
    setRegisterDetails,
  } = useContext(DataContext);

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const allCountries = Country.getAllCountries();
  const [allCities, setAllCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [countryIsoCode, setCountryIsoCode] = useState("GH");
  const [selectedCountry, setSelectedCountry] = useState("Ghana");

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    const isoCode = allCountries.filter(
      (country) => country.name === selectedCountry
    )[0].isoCode;
    setCountryIsoCode(isoCode);
  };

  useEffect(() => {
    setAllCities(City.getCitiesOfCountry(countryIsoCode));
  }, [countryIsoCode]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameRegex = /^[a-zA-Z ]{5,10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{15}$/;

    const registeredUsers = localStorage.getItem("registeredUsers");

    if (!nameRegex.test(name)) {
      setErrors("Invalid name");
    } else if (!emailRegex.test(email)) {
      setErrors("Invalid email");
    } else if (!passwordRegex.test(password)) {
      setErrors(
        "Invalid password(Include capital and small letters, numbers, special characters and must be 15 letters long.)"
      );
    } else if (selectedCountry === "") {
      setErrors("Select country");
    } else if (allCities.length > 1 && selectedCity === "") {
      setErrors("Select city");
    } else {
      if (registeredUsers) {
        if (
          JSON.parse(registeredUsers)[0].email === email &&
          registeredUsers[0].password === password
        ) {
          setErrors("Already created an account with this email!");
          return;
        } else {
          setErrors("");
          // CHANGE THIS PART WHERE IF YOU CREATE A NEW USER, IT ADDS TO THE REGISTERED USERS
          navigate("/shop");
          localStorage.setItem(
            "registeredUsers",
            JSON.stringify([
              {
                name,
                email,
                password,
                selectedCity,
                selectedCountry,
                phoneNumber,
              },
            ])
          );
        }
      } else {
        localStorage.setItem(
          "registeredUsers",
          JSON.stringify([
            {
              name,
              email,
              password,
              selectedCity,
              selectedCountry,
              phoneNumber,
            },
          ])
        );
        setLogIn(true);
        navigate("/shop");
        setRegisterDetails({
          name,
          email,
          password,
          selectedCity,
          selectedCountry,
          phoneNumber,
        });
      }
    }
  };

  return (
    <main className={`flex items-center justify-center pt-[55px] pb-7`}>
      <div className="text-center rounded max-w-[400px]">
        <div className="text-lg font-bold mb-2 gap-1 flex flex-col">
          <p>Please Register Here!</p>
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
              id="name"
              type="text"
              minLength="5"
              maxLength="10"
              value={name.slice(0, 1).toUpperCase() + name.slice(1)}
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-md border border-[#6d6d6d] bg-white py-2 px-3 font-medium text-[gray] outline-none max-w-[220px]"
            />

            <input
              required
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="w-full rounded-md border border-[#6d6d6d] bg-white py-2 px-3 font-medium text-[gray] outline-none max-w-[220px]"
            />

            <input
              required
              id="password"
              maxLength="15"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="w-full rounded-md border border-[#6d6d6d] bg-white py-2 px-3 font-medium text-[gray] outline-none max-w-[220px]"
            />

            <select
              className="w-full rounded-md border border-[#6d6d6d] bg-white py-2 px-3 font-medium text-[gray] outline-none max-w-[220px]"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              {allCountries.map((country) => (
                <option
                  required
                  key={country.name + country.flag}
                  value={country.name}
                >
                  {country.name}
                </option>
              ))}
            </select>

            <select
              className="w-full rounded-md border border-[#6d6d6d] bg-white py-2 px-3 font-medium text-[gray] outline-none max-w-[220px]"
              value={selectedCity}
              onChange={handleCityChange}
            >
              {allCities.map((city) => (
                <option
                  required
                  key={city.name + city.stateCode}
                  value={city.name}
                >
                  {city.name}
                </option>
              ))}
            </select>

            <input
              required
              type="number"
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full rounded-md border border-[#6d6d6d] bg-white py-2 px-3 font-medium text-[gray] outline-none max-w-[220px]"
            />
          </div>

          {errors && <div className="text-red-600 font-semibold">{errors}</div>}

          <button
            type="submit"
            className="hover:opacity-80 rounded-sm bg-[#6d6d6d] py-2 px-6 font-semibold text-white outline-none mt-1"
          >
            Register
          </button>

          <Link to="/login" className="cursor-pointer hover:text-[blue] ">
            Already have an account.
          </Link>
        </form>
      </div>
    </main>
  );
}
