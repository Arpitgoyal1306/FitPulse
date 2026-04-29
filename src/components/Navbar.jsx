import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>HisabKitab</h2>

      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
