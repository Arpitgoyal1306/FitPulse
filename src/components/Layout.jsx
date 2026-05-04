import { Link, useLocation, Outlet } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();

  const navItem =
    "flex items-center gap-2 px-4 py-2.5 rounded-lg transition font-medium text-sm whitespace-nowrap";
  const active = "bg-blue-600 text-white shadow-sm";
  const inactive = "text-slate-300 hover:bg-slate-800 hover:text-white";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* Sidebar */}
      <aside className="w-full md:fixed md:inset-y-0 md:left-0 md:w-64 bg-slate-900 text-white border-b md:border-b-0 md:border-r border-slate-800 z-20">
        <div className="p-5 border-b border-slate-800">
          <h1 className="text-xl font-bold text-white">HisabKitab</h1>
          <p className="text-slate-400 text-xs mt-1">Smart Expense Tracker</p>
        </div>

        <nav className="flex md:flex-col gap-2 px-3 py-3 md:py-4 overflow-x-auto md:overflow-visible">
          <Link
            to="/"
            className={`${navItem} ${location.pathname === "/" ? active : inactive}`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`${navItem} ${location.pathname === "/dashboard" ? active : inactive}`}
          >
            Dashboard
          </Link>
          <Link
            to="/reports"
            className={`${navItem} ${location.pathname === "/reports" ? active : inactive}`}
          >
            Reports
          </Link>
          <Link
            to="/about"
            className={`${navItem} ${location.pathname === "/about" ? active : inactive}`}
          >
            About
          </Link>
        </nav>

        <div className="flex md:hidden px-4 pb-4 pt-2 border-t border-slate-800 items-center justify-between">
          <span className="text-xs text-slate-500">v1.0</span>
          <DarkModeToggle />
        </div>

        <div className="hidden md:flex p-4 border-t border-slate-800 items-center justify-between">
          <span className="text-xs text-slate-500">v1.0</span>
          <DarkModeToggle />
        </div>
      </aside>

      {/* Main area */}
      <div className="md:ml-64 flex flex-col min-h-screen">
        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
