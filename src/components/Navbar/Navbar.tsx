// NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <header className="bg-black text-white px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
                <h1 className="text-xl font-bold tracking-wide">
                    QUICKBET <span className="text-yellow-500">MOVIES</span>
                </h1>
            </div>

            {/* Menu Links */}
            <ul className="flex gap-4">
              <li>
                <Link to="/" className="hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-yellow-500">
                  Movies
                </Link>
              </li>
              
            </ul>

            {/* User Icon */}
            <div className="flex items-center">
                <button className="rounded-full bg-gray-800 p-2 hover:bg-gray-700">
                    <img
                        src="/assets/user-icon.svg"
                        alt="User Icon"
                        className="w-6 h-6"
                    />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
