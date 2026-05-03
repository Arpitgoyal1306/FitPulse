import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  const navItem = "flex items-center gap-3 px-4 py-2 rounded-lg transition";

  const active = "bg-blue-600 text-white";

  const inactive = "text-gray-300 hover:bg-gray-800";

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}

      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold">HisabKitab</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/"
            className={`${navItem} ${
              location.pathname === "/" ? active : inactive
            }`}
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className={`${navItem} ${
              location.pathname === "/dashboard" ? active : inactive
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/reports"
            className={`${navItem} ${
              location.pathname === "/reports" ? active : inactive
            }`}
          >
            Reports
          </Link>

          <Link
            to="/about"
            className={`${navItem} ${
              location.pathname === "/about" ? active : inactive
            }`}
          >
            About
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-800 text-sm text-gray-400">
          Expense Tracker
        </div>
      </aside>

      {/* Main content */}

      <main className="flex-1 p-10 bg-gray-100">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
