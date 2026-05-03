function RecentTransactions({ expenses }) {
  // Sort by date (newest first)
  const recentExpenses = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        Recent Transactions
      </h2>

      {recentExpenses.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No transactions yet.</p>
      ) : (
        <ul className="space-y-2">
          {recentExpenses.map((exp) => (
            <li
              key={exp.id}
              className="flex justify-between items-center text-gray-700 dark:text-gray-300"
            >
              <span className="font-medium">{exp.title}</span>
              <span className="text-gray-900 dark:text-gray-100 font-semibold">
                ₹{exp.amount}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecentTransactions;
