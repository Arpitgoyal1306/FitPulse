function ResetButton({ setExpenses, setBudget }) {
  const handleReset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to delete all data?",
    );

    if (confirmReset) {
      // Clear storage
      localStorage.removeItem("expenses");
      localStorage.removeItem("budget");

      // Reset state
      setExpenses([]);
      setBudget("");

      alert("All data has been reset.");
    }
  };

  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      <button
        onClick={handleReset}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "8px 12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Reset All Data
      </button>
    </div>
  );
}

export default ResetButton;
