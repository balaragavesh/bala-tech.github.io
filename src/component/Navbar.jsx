import React, { useContext } from "react";
import { LaptopContext } from "./context/Context";
import img1 from "../assets/img3.jpg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
export default function Navbar({
  handleHome,
  handleAbout,
  handleContact,
  handleLaptop,
  handleService,
}) {
  const { isNavbar, setNavbar } = useContext(LaptopContext);
  return (
    <nav className="flex w-full z-20 items-center fixed top-0 left-0 bg-zinc-950 px-4 sm:px-5 md:px-6 py-4 justify-between ">
    <h1 className="text-slate-500 text-lg md:text-2xl font-bold font-Montserrat">
      <img src={img1} className="w-16 md:w-20" alt="" srcSet="" />
    </h1>
  
    <div className="md:hidden">
      <svg
        onClick={() => setNavbar((state) => !state)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-gray-100 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>
      {isNavbar ? (
        <ul className="absolute top-0 left-0 bg-zinc-800 z-10 rounded  h-[100vh] flex  flex-col justify-center px-10 text-gray-100">
          <li className="p-2 font-Montserrat" onClick={handleHome}>
            Home
          </li>
          <li className="p-2 font-Montserrat" onClick={handleAbout}>
            About
          </li>
          <li className="p-2 font-Montserrat" onClick={handleService}>
            Services
          </li>
          <li className="p-2 font-Montserrat" onClick={handleLaptop}>
            Laptops
          </li>
          <li className="p-2 font-Montserrat" onClick={handleContact}>
            Contact
          </li>
          <button
            className="px-4 font-Poppins py-2 my-2 bg-zinc-900 rounded"
            onClick={() => setNavbar((state) => !state)}
          >
            Close
          </button>
        </ul>
      ) : (
        <></>
      )}
    </div>
  
    <ul className="hidden md:flex gap-5 font-Poppins cursor-pointer text-gray-100">
      <li className="p-2 font-Montserrat" onClick={handleHome}>
        Home
      </li>
      <li className="p-2 font-Montserrat" onClick={handleAbout}>
        About
      </li>
      <li className="p-2 font-Montserrat" onClick={handleService}>
        Services
      </li>
      <li className="p-2 font-Montserrat" onClick={handleLaptop}>
        Laptops
      </li>
      <li className="p-2 font-Montserrat" onClick={handleContact}>
        Contact
      </li>
    </ul>
  </nav>
  
  );
}
