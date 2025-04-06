import React, { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white dark:bg-gray-800 text-black dark:text-white">
        <div className="flex items-center space-x-8">
          <span className="flex items-center font-bold text-2xl space-x-8">
            Flavour
          </span>
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                }
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create-recipe"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                }
              >
                Create Recipe
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded border hover:bg-blue-600">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
