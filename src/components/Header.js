import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-purple-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/projects" className="hover:underline">Projects</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/blog" className="hover:underline">Blog</Link></li>
        </ul>
        <div>
          {user ? (
            <button onClick={logout} className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-purple-100 transition duration-300">
              Logout
            </button>
          ) : (
            <div className="space-x-4">
              <Link to="/login" className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-purple-100 transition duration-300">
                Login
              </Link>
              <Link to="/register" className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-purple-600 transition duration-300">
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

