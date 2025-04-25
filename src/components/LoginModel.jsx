import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";

const LoginModal = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm text-center shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-500 text-xl"
        >
          ←
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="logo" className="w-[180px] object-contain" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold mb-1">India's First food truck app</h2>
        <p className="text-gray-500 mb-4">Log in or Sign up</p>

        {/* Phone Input */}
        <div className="flex border border-gray-300 rounded-md overflow-hidden mb-4">
          <span className="px-3 py-2 bg-gray-100 text-sm text-gray-700">
            +91
          </span>
          <input
            type="text"
            placeholder="Enter mobile number"
            className="flex-1 px-3 py-2 focus:outline-none"
          />
        </div>

        <button className="bg-blue-600 text-white w-full py-2 rounded-md mb-4">
          Continue
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-t" />
        </div>

        {/* Social Logins */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-100">
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          <button className="flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-100 text-blue-600">
            <FaFacebook className="text-xl" />
            Continue with Facebook
          </button>

          <button className="flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-100">
            <FaGithub className="text-xl" />
            Continue with GitHub
          </button>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-500 mt-6">
          By continuing, you agree to our{" "}
          <a href="#" className="underline">
            Terms of service
          </a>{" "}
          &{" "}
          <a href="#" className="underline">
            Privacy policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
