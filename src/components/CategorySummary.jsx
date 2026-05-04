function CategorySummary({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          Category-wise Spending
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          No data available yet.
        </p>
      </div>
    );
  }
  const categoryTotals = {};

  // Calculate totals per category

  expenses.forEach((exp) => {
    if (categoryTotals[exp.category]) {
      categoryTotals[exp.category] += exp.amount;
    } else {
      categoryTotals[exp.category] = exp.amount;
    }
  });

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
        Category-wise Spending
      </h2>

      {Object.keys(categoryTotals).length === 0 ? (
        <p className="text-slate-600 dark:text-slate-400">No expenses yet.</p>
      ) : (
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          {Object.entries(categoryTotals).map(([category, total]) => (
            <li key={category} className="flex justify-between">
              <span>{category}</span>
              <span className="font-semibold">₹ {total}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategorySummary;
