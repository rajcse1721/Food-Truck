import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import LoginModal from "./LoginModel";
import logo from "../assets/logo.png";

const Title = () => (
  <a href="/">
    <img
      className="w-[180px] max-w-full object-contain"
      alt="logo"
      src={logo}
    />
  </a>
);

const HeaderComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const isOnline = useOnline();
  return (
    <div className="flex justify-between items-center p-4 md:p-6 m-2.5 border border-gray-300 rounded-lg bg-white shadow-md sticky top-0 z-[1000]">
      <Title />
      <div className="nav-items flex items-center gap-4">
        <ul className="list-none flex gap-4 p-0 m-0">
          <Link to="/">
            <li className="px-3 py-2 cursor-pointer font-medium text-gray-800 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 transition-colors duration-300">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="px-3 py-2 cursor-pointer font-medium text-gray-800 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 transition-colors duration-300">
              About Us
            </li>
          </Link>
          <Link to="/instamart">
            <li className="px-3 py-2 cursor-pointer font-medium text-gray-800 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 transition-colors duration-300">
              Instamart
            </li>
          </Link>
          <Link to="/contact">
            <li className="px-3 py-2 cursor-pointer font-medium text-gray-800 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 transition-colors duration-300">
              contact
            </li>
          </Link>
          <Link to="/">
            <li className="px-3 py-2 cursor-pointer font-medium text-gray-800 hover:text-orange-600 hover:border-b-2 hover:border-orange-600 transition-colors duration-300">
              Cart
            </li>
          </Link>
        </ul>
        <h1>{isOnline ? "🟢" : "🔴"}</h1>
        <div className="p-10">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
          {showModal && <LoginModal onClose={() => setShowModal(false)} />}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
