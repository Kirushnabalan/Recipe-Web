import React, { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Close mobile menu on navigation
  const handleNavLinkClick = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm px-4 py-4 md:px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo and Desktop Links */}
        <div className="flex items-center space-x-8">
          <span className="font-bold text-2xl">Flavour</span>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {["/", "/favorites", "/create-recipe"].map((path, idx) => {
              const labels = ["Home", "Favorites", "Create Recipe"];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={handleNavLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 dark:text-blue-400"
                        : "text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                    }
                  >
                    {labels[idx]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right side buttons and mobile menu toggle */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Desktop Login/Register */}
          <div className="hidden md:flex space-x-2">
            <NavLink to="/login" onClick={handleNavLinkClick}>
              <button className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded hover:bg-gray-600 transition-colors">
                Login
              </button>
            </NavLink>
            <NavLink to="/register" onClick={handleNavLinkClick}>
              <button className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded hover:bg-gray-600 transition-colors">
                Register
              </button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 border-t border-gray-300 dark:border-gray-700 pt-4">
          <ul className="flex flex-col space-y-3 text-base font-medium">
            {["/", "/favorites", "/create-recipe"].map((path, idx) => {
              const labels = ["Home", "Favorites", "Create Recipe"];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={handleNavLinkClick}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 dark:text-blue-400"
                        : "text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                    }
                  >
                    {labels[idx]}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="flex space-x-4 mt-4">
            <NavLink to="/login" onClick={handleNavLinkClick}>
              <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded hover:bg-gray-600 transition-colors">
                Login
              </button>
            </NavLink>
            <NavLink to="/register" onClick={handleNavLinkClick}>
              <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded hover:bg-gray-600 transition-colors">
                Register
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
