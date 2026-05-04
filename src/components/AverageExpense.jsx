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

  // Safe total calculation
  const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  const transactionCount = expenses.length;

  // Average per transaction
  const average =
    transactionCount > 0 ? Math.round(total / transactionCount) : 0;

  // Days covered (from first expense to today)
  const firstDate = new Date(expenses[0].date);
  const today = new Date();

  const diffTime = today.getTime() - firstDate.getTime();

  const days = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 1);

  // Average per day
  const averagePerDay = Math.round(total / days);

  // Currency formatting
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  return (
    <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        Average Expense
      </h2>

      <p className="text-lg font-bold text-gray-900 dark:text-gray-200">
        {formatCurrency(average)} per transaction
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Based on {transactionCount} expenses
      </p>

      <div className="mt-4">
        <p className="text-gray-500 dark:text-gray-400">
          Average spending per day:
        </p>

        <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">
          {formatCurrency(averagePerDay)}
        </p>
      </div>
    </div>
  );
}

export default AverageExpense;
