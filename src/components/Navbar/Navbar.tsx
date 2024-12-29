import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiFilm, FiHeart, FiUser } from "react-icons/fi"; // Íconos de React Icons
import { RiProfileFill } from "react-icons/ri";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 text-yellow-500">
            <FiFilm size={30} />
            <h1 className="text-2xl font-bold tracking-wide">
              MOVIESLOC <span className="text-white">WEB</span>
            </h1>
          </Link>
        </div>

 
        <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-yellow-500 transition duration-300"
            >
              <FiHome size={18} />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className="flex items-center gap-2 hover:text-yellow-500 transition duration-300"
            >
              <FiFilm size={18} />
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="flex items-center gap-2 hover:text-yellow-500 transition duration-300"
            >
              <FiHeart size={18} />
              Favorites
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center gap-2 hover:text-yellow-500 transition duration-300"
            >
              <RiProfileFill size={18} />
              About
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center">
          <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700 transition">
            <FiUser size={24} className="text-white" />
          </button>
        </div>

     
        <button
          onClick={toggleMenu}
          className="text-yellow-500 text-2xl md:hidden focus:outline-none"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="bg-gray-900 md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6 text-white">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 text-lg hover:text-yellow-500 transition duration-300"
                onClick={toggleMenu} 
              >
                <FiHome size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/movies"
                className="flex items-center gap-2 text-lg hover:text-yellow-500 transition duration-300"
                onClick={toggleMenu} 
              >
                <FiFilm size={20} />
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="flex items-center gap-2 text-lg hover:text-yellow-500 transition duration-300"
                onClick={toggleMenu} 
              >
                <FiHeart size={20} />
                Favorites
              </Link>
            </li>
            <li>
              <button
                className="flex items-center gap-2 text-lg hover:text-yellow-500 transition duration-300"
                onClick={toggleMenu}
              >
                <FiUser size={20} />
                Profile
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
