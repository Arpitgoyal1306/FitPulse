function WeeklyReport({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Weekly Report
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          No data available yet.
        </p>
      </div>
    );
  }

  const today = new Date();

  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(today.getDate() - 7);

  const weeklyExpenses = expenses.filter((exp) => {
    const expenseDate = new Date(exp.date);

    return expenseDate >= sevenDaysAgo && expenseDate <= today;
  });

  const weeklyTotal = weeklyExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        Weekly Report
      </h2>

      <div>
        <p className="text-gray-500 dark:text-gray-400">
          Total spent in last 7 days:
        </p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          ₹ {weeklyTotal}
        </h3>
      </div>

      <div className="mt-4">
        <p className="text-gray-500 dark:text-gray-400">
          Number of transactions:
        </p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {weeklyExpenses.length}
        </h3>
      </div>
    </div>
  );
}

export default WeeklyReport;
