function CategoryCount({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Expense Count by Category
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          No data available yet.
        </p>
      </div>
    );
  }
  const categoryCounts = {};

  // Count number of expenses per category
  expenses.forEach((exp) => {
    if (categoryCounts[exp.category]) {
      categoryCounts[exp.category] += 1;
    } else {
      categoryCounts[exp.category] = 1;
    }
  });

  return (
    <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        Expense Count by Category
      </h2>

      {Object.keys(categoryCounts).length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No expenses yet.</p>
      ) : (
        <ul className="space-y-1 text-gray-700 dark:text-gray-300">
          {Object.entries(categoryCounts).map(([category, count]) => (
            <li key={category} className="flex justify-between">
              <span>{category}</span>
              <span className="font-medium">{count} expenses</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryCount;
