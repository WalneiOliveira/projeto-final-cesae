import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="relative max-w-8xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <div
            className="flex-none text-xl font-semibold dark:text-white"
            aria-label="Brand"
          >
            <Link to="/">
              <img src="/images/logo-color.svg" alt="" />
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              {/* aberto? ícone X, fechado hamburguer menu */}
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        <div
          // id="navbar-collapse-with-animation"
          className={`hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <div
              className="font-medium text-gray-500 sm:py-6 hover:text-blue-500 dark:text-blue-500"
              aria-current="page"
            >
              <Link className="w-full" to="/">
                Home
              </Link>
            </div>
            <div className="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500">
              <Link to="/percursos">Percursos</Link>
            </div>
            <div className="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500">
              <Link to="/cursos">Cursos</Link>
            </div>

            <div className="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500">
              <Link to="/blog">Blog</Link>
            </div>

            <div className="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500">
              <Link to="/sobre">Sobre</Link>
            </div>

            <div className=" hidden md:block font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500">
              <Link to="/form">Form</Link>
            </div>
            <div className="font-medium text-gray-500 hover:text-blue-500 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500">
              <FiSearch />
            </div>

            <Link to="/login">
              <div className="text-blue-600 py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <FiUser />
                Login
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
