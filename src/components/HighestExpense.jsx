function HighestExpense({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Highest Expense
        </h2>
        <p className="text-gray-600 dark:text-gray-400">No expenses yet.</p>
      </div>
    );
  }

  // Safely find highest expense
  const highest = expenses.reduce((max, exp) => {
    if (!exp || !exp.amount) return max;

    return Number(exp.amount) > Number(max.amount) ? exp : max;
  }, expenses[0]);

  // Total spending
  const totalSpent = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  // Percentage of total
  const percentage =
    totalSpent > 0
      ? Math.round((Number(highest.amount) / totalSpent) * 100)
      : 0;

  // Currency formatting
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  return (
    <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        Highest Expense
      </h2>

      <p className="font-bold text-lg text-gray-900 dark:text-gray-200">
        {highest.title}
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        Amount: {formatCurrency(highest.amount)}
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Category: {highest.category}
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Date: {highest.date}
      </p>

      <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
        {percentage}% of total spending
      </p>
    </div>
  );
}

export default HighestExpense;
