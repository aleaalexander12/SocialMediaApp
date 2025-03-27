import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="bg-secondary min-h-screen text-gray-900 font-sans">
      <Navbar />
      <div className="flex max-w-7xl mx-auto pt-6 px-6 gap-6">
        {/* Sidebar */}
        <aside className="hidden lg:block w-1/4">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 bg-white rounded-2xl shadow p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
