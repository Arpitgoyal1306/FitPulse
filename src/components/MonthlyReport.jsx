function MonthlyReport({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          Monthly Report
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          No data available yet.
        </p>
      </div>
    );
  }

  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Filter expenses for current month safely
  const monthlyExpenses = expenses.filter((exp) => {
    if (!exp.date) return false;

    const expenseDate = new Date(exp.date);

    return (
      expenseDate.getMonth() === currentMonth &&
      expenseDate.getFullYear() === currentYear
    );
  });

  // Total spent
  const monthlyTotal = monthlyExpenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0,
  );

  // Number of transactions
  const transactionCount = monthlyExpenses.length;

  // Days passed this month
  const daysSoFar = today.getDate();

  // Total days in month
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Remaining days
  const remainingDays = totalDaysInMonth - daysSoFar;

  // Average per day
  const averagePerDay =
    daysSoFar > 0 ? Math.round(monthlyTotal / daysSoFar) : 0;

  // Average per transaction
  const averagePerTransaction =
    transactionCount > 0 ? Math.round(monthlyTotal / transactionCount) : 0;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
        Monthly Report
      </h2>

      <div>
        <p className="text-slate-500 dark:text-slate-400">
          Total spent this month
        </p>

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          ₹ {monthlyTotal}
        </h3>
      </div>

      <div className="mt-4">
        <p className="text-slate-500 dark:text-slate-400">
          Number of transactions
        </p>

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {transactionCount}
        </h3>
      </div>

      <div className="mt-4">
        <p className="text-slate-500 dark:text-slate-400">
          Average spending per day
        </p>

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          ₹ {averagePerDay}
        </h3>
      </div>

      <div className="mt-4">
        <p className="text-slate-500 dark:text-slate-400">
          Average per transaction
        </p>

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          ₹ {averagePerTransaction}
        </h3>
      </div>

      <div className="mt-4">
        <p className="text-slate-500 dark:text-slate-400">
          Remaining days in month
        </p>

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {remainingDays} days
        </h3>
      </div>
    </div>
  );
}

export default MonthlyReport;
