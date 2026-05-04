function RecentTransactions({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Recent Transactions
        </h2>

        <p className="text-gray-600 dark:text-gray-400">No transactions yet.</p>
      </div>
    );
  }

  // Sort by date (newest first)
  const recentExpenses = [...expenses]
    .filter((exp) => exp && exp.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  // Currency formatter
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  return (
    <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        Recent Transactions
      </h2>

      <ul className="space-y-3">
        {recentExpenses.map((exp) => (
          <li
            key={exp.id}
            className="flex justify-between items-center border-b pb-2 last:border-none"
          >
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {exp.title}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.category} • {exp.date}
              </p>
            </div>

            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {formatCurrency(exp.amount)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentTransactions;
