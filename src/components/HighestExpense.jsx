function HighestExpense({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          Highest Expense
        </h2>
        <p className="text-slate-600 dark:text-slate-400">No expenses yet.</p>
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
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
        Highest Expense
      </h2>

      <p className="font-semibold text-lg text-slate-900 dark:text-slate-200">
        {highest.title}
      </p>

      <p className="text-slate-700 dark:text-slate-300">
        Amount: {formatCurrency(highest.amount)}
      </p>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        Category: {highest.category}
      </p>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        Date: {highest.date}
      </p>

      <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
        {percentage}% of total spending
      </p>
    </div>
  );
}

export default HighestExpense;
