import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = ({ disable }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center max-w-7xl md:mx-auto p-6">
      <h2 className="flex text-4xl font-bold text-white items-center justify-center gap-2">
        <Link to="/">
          <img src={Logo} alt="Ajackus Logo" className="w-40" />
        </Link>
        <span className="hidden md:inline">Team Dashboard</span>
      </h2>
      <button
        onClick={() => navigate("/add")}
        className={`group px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:shadow-lg hover:bg-white/20 transition-all duration-200 cursor-pointer ${
          disable ? "hidden" : ""
        }`}
      >
        <div className="flex items-center space-x-2">
          <span>Add Member</span>
        </div>
      </button>
    </div>
  );
};

export default Navbar;
