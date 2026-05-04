function ResetButton({ setExpenses, setBudget }) {
  const handleReset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to delete all data?",
    );

    if (confirmReset) {
      // Setting state via context automatically updates localStorage too
      // (ExpenseContext useEffect handles the save)
      setExpenses([]);
      setBudget("");
      // No need for window.location.reload() anymore
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
      <button
        onClick={handleReset}
        className="w-full bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700 transition font-medium"
      >
        Reset All Data
      </button>
    </div>
  );
}

export default ResetButton;
