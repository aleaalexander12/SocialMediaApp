import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-purple-600">Creatify</Link>
        <div className="space-x-4 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <Link to="/create" className="hover:text-purple-600">Create</Link>
          <Link to="/profile/1" className="hover:text-purple-600">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;