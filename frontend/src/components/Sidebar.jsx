import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Navigation</h2>
      <nav className="flex flex-col space-y-3">
        <Link to="/" className="hover:text-purple-600 font-medium transition-colors">🏠 Home</Link>
        <Link to="/create" className="hover:text-purple-600 font-medium transition-colors">📸 Create Post</Link>
        <Link to="/profile/1" className="hover:text-purple-600 font-medium transition-colors">👤 My Profile</Link>
        <Link to="/login" className="hover:text-purple-600 font-medium transition-colors">🔐 Login</Link>
        <Link to="/register" className="hover:text-purple-600 font-medium transition-colors">✍️ Register</Link>
      </nav>
    </div>
  );
};

export default Sidebar;