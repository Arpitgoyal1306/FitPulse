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
    <div className="m-2">
      <button
        onClick={handleReset}
        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
      >
        Reset All Data
      </button>
    </div>
  );
}

export default ResetButton;
