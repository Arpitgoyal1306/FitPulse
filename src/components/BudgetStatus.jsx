function BudgetStatus({ budget, totalSpent }) {
  const numericBudget = Number(budget) || 0;

  const remaining = numericBudget - totalSpent;

  if (numericBudget === 0) {
    return null;
  }

  return (
    <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-white dark:bg-gray-800 shadow">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
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
