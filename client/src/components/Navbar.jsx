import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="bg-slate-200 ">
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Sahand</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form className="bg-slate-100 rounded-lg p-3 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4 cursor-pointer">
            <Link to='/'>
            <li className="hidden sm:inline text-slate-700">Home</li>
            </Link>
            <Link to='/about'>
            <li className="hidden sm:inline text-slate-700">About</li>
            </Link>
            <Link to='/sign-in'>
            <li className="hidden sm:inline text-slate-700">SignIn</li>
            </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
