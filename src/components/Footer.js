import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-purple-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">John Doe</h3>
            <p className="mb-4">Web Developer & Designer</p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:johndoe@example.com" className="hover:text-purple-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-purple-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-purple-300">About</Link></li>
              <li><Link to="/projects" className="hover:text-purple-300">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-purple-300">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-purple-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with my latest projects and blog posts.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-600 px-4 py-2 rounded-r-md hover:bg-purple-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
