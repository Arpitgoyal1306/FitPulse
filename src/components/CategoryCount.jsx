function CategoryCount({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          Expense Count by Category
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
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
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
        Expense Count by Category
      </h2>

      {Object.keys(categoryCounts).length === 0 ? (
        <p className="text-slate-600 dark:text-slate-400">No expenses yet.</p>
      ) : (
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          {Object.entries(categoryCounts).map(([category, count]) => (
            <li key={category} className="flex justify-between">
              <span>{category}</span>
              <span className="font-semibold">{count} expenses</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryCount;
