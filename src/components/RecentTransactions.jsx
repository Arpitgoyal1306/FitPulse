function RecentTransactions({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          Recent Transactions
        </h2>

        <p className="text-slate-600 dark:text-slate-400">
          No transactions yet.
        </p>
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
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
        Recent Transactions
      </h2>

      <ul className="space-y-3">
        {recentExpenses.map((exp) => (
          <li
            key={exp.id}
            className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2 last:border-none"
          >
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">
                {exp.title}
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                {exp.category} • {exp.date}
              </p>
            </div>

            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {formatCurrency(exp.amount)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentTransactions;
