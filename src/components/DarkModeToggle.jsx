import { useState, useEffect } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);

      document.body.style.backgroundColor = "#111";

      document.body.style.color = "white";
    }
  }, []);

  // Apply theme when toggled

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#111";

      document.body.style.color = "white";

      localStorage.setItem("theme", "dark");
    } else {
      document.body.style.backgroundColor = "white";

      document.body.style.color = "black";

      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
