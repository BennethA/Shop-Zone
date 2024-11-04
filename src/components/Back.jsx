import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../Context/DataContext';
import { BiLeftArrowCircle } from 'react-icons/bi';

export default function Back() {
  const { changeContrast } = useContext(DataContext);
  
  return (
    <Link
      to="/shop"
      className={`text-xl fixed border-2 px-2 py-1 rounded-sm mt-1 transition-all duration-200 z-50 ${
        changeContrast
          ? "bg-black hover:bg-white hover:text-black"
          : "border-black bg-white hover:bg-black hover:text-white"
      }`}
    >
      <BiLeftArrowCircle />
    </Link>
  );
}
