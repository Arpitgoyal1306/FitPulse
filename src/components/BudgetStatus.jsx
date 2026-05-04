function BudgetStatus({ budget, totalSpent }) {
  const numericBudget = Number(budget) || 0;

  const remaining = numericBudget - totalSpent;

  if (numericBudget === 0) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
        Budget Status
      </h2>

      {remaining >= 0 ? (
        <p className="text-green-600 dark:text-green-400">
          You are within your budget. Remaining: ₹ {remaining}
        </p>
      ) : (
        <p className="text-red-600 dark:text-red-400">
          You have exceeded your budget. Overspent: ₹ {Math.abs(remaining)}
        </p>
      )}
    </div>
  );
}

export default BudgetStatus;
