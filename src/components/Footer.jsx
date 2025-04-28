import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-white border-t border-gray-300 text-center py-4 mt-10 shadow-inner">
      <h4 className="text-sm text-gray-700">
        {" "}
        @{currentYear} All Right Reserved 😍Developed By {user.name}❤️
      </h4>
    </div>
  );
};

export default Footer;
