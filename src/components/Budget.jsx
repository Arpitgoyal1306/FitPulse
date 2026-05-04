function Budget({ budget, setBudget, totalSpent }) {
  const numericBudget = Number(budget) || 0;

  const remaining = numericBudget - totalSpent;

  const warningThreshold = numericBudget * 0.2;

  const percentUsed =
    numericBudget > 0
      ? Math.min(Math.round((totalSpent / numericBudget) * 100), 100)
      : 0;

  let barColor = "bg-green-500";

  if (percentUsed >= 80) {
    barColor = "bg-orange-500";
  }

  if (percentUsed >= 100) {
    barColor = "bg-red-500";
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Budget
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Set a monthly limit and track progress.
        </p>
      </div>

      <input
        type="number"
        placeholder="Enter Monthly Budget"
        value={budget ?? ""}
        onChange={(e) => {
          const value = e.target.value;

          if (value === "") {
            setBudget("");
          } else {
            setBudget(Number(value));
          }
        }}
        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
      />

      <div className="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
        <span>Total Spent: ₹ {totalSpent}</span>
        <span>Remaining Budget: ₹ {remaining}</span>
      </div>

      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${barColor}`}
          style={{ width: percentUsed + "%" }}
        />
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        {percentUsed}% used
      </p>

      {remaining < 0 && (
        <p className="text-red-600 font-medium">Budget exceeded</p>
      )}

      {remaining > 0 && remaining <= warningThreshold && (
        <p className="text-orange-600 font-medium">Budget is almost finished</p>
      )}
    </div>
  );
}

export default Budget;
