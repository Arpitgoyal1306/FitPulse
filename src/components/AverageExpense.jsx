function AverageExpense({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Average Expense
        </h2>
        <p className="text-gray-600 dark:text-gray-400">No expenses yet.</p>
      </div>
    );
  }

  // Calculate total
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  // Calculate average
  const average = Math.round(total / expenses.length);

  return (
    <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        Average Expense
      </h2>

      <p className="text-lg text-gray-900 dark:text-gray-200">
        ₹ {average} per transaction
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Based on {expenses.length} expenses
      </p>
    </div>
  );
}

export default AverageExpense;
