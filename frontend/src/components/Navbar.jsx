import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, PlusCircle, User, LogIn } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: <Home size={22} />, label: "Home" },
    { to: "/create", icon: <PlusCircle size={22} />, label: "Create" },
    { to: "/profile/1", icon: <User size={22} />, label: "Profile" },
    { to: "/login", icon: <LogIn size={22} />, label: "Login" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t border-gray-200 z-50">
      <div className="max-w-4xl mx-auto px-6 py-2 flex justify-between">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex flex-col items-center justify-center text-gray-500 hover:text-purple-600 transition ${
              location.pathname === item.to ? "text-purple-600" : ""
            }`}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
