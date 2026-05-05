function Budget({ budget, setBudget, totalSpent, remainingBudget, percentageUsed }) {
  const numericBudget = Number(budget) || 0;
  const remaining = remainingBudget;
  const warningThreshold = numericBudget * 0.2;

  // Clamp percentage between 0 and 100 to prevent overflow
  const displayPercentage = Math.min(Math.round(percentageUsed), 100);

  let barColor = "bg-[var(--success)]";

  if (displayPercentage >= 80) {
    barColor = "bg-[var(--accent)]";
  }

  if (displayPercentage >= 100) {
    barColor = "bg-[var(--danger)]";
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="eyebrow">Plan</p>
        <h2 className="text-xl font-semibold mt-2">Budget</h2>
        <p className="text-sm text-muted mt-1">
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
        className="input"
      />

      <div className="flex flex-col gap-1 text-sm text-muted">
        <span>Total Spent: ₹ {totalSpent}</span>
        <span>Remaining Budget: ₹ {remaining}</span>
      </div>

      <div className="w-full bg-[var(--surface-2)] h-2.5 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${barColor}`}
          style={{ width: Math.min(displayPercentage, 100) + "%" }}
        />
      </div>

      <p className="text-sm text-muted">{displayPercentage}% used</p>

      {remaining < 0 && (
        <p className="font-medium text-[var(--danger)]">Budget exceeded</p>
      )}

      {remaining > 0 && remaining <= warningThreshold && (
        <p className="font-medium text-[var(--accent)]">
          Budget is almost finished
        </p>
      )}
    </div>
  );
}

export default Budget;
