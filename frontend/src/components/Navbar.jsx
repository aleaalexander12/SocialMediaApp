import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-purple-600">Creatify</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/create" className="hover:text-purple-600">New Post</Link>
        <Link to="/profile/me" className="hover:text-purple-600">Profile</Link>
        <Link to="/login" className="hover:text-purple-600">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
