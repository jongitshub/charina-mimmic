import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white font-mono shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-blue-600">Charity</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600">Causes</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600">Blog</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
        <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg">
          Donate Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
