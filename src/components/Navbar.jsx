import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  return (
    <nav
      style={{
        padding: "10px",
        borderBottom: "1px solid gray",
        marginBottom: "20px",
      }}
    >
      <h2>HisabKitab</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/reports">Reports</Link>

        <Link to="/about">About</Link>

        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
