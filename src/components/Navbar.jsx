import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  return (
    <nav className="p-4 border-b border-gray-200 dark:border-gray-800 mb-5 flex justify-between items-center bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        HisabKitab
      </h2>

      <div className="flex gap-4 items-center">
        <Link
          to="/"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/reports"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Reports
        </Link>

        <Link
          to="/about"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          About
        </Link>

        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
