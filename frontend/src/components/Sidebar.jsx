import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 p-4 bg-white shadow-lg h-screen fixed">
      <div className="text-xl font-bold text-purple-600 mb-6">Creatify</div>
      <nav className="space-y-4">
        <Link to="/" className="block text-gray-700 hover:text-purple-600">Home</Link>
        <Link to="/create" className="block text-gray-700 hover:text-purple-600">Create Post</Link>
        <Link to="/profile/1" className="block text-gray-700 hover:text-purple-600">My Profile</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;