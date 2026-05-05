import { useMemo } from "react";

function Budget({ budget, setBudget, expenses = [] }) {
  // Safely convert budget to number
  const numericBudget = Number(budget) || 0;

  // Dynamically calculate totalSpent from expenses array
  const totalSpent = useMemo(() => {
    return expenses.reduce((sum, exp) => {
      const amount = Number(exp.amount || 0);
      return sum + (isNaN(amount) ? 0 : amount);
    }, 0);
  }, [expenses]);

  // Dynamically calculate remaining budget
  const remainingBudget = useMemo(() => {
    return numericBudget - totalSpent;
  }, [numericBudget, totalSpent]);

  // Dynamically calculate percentage used
  const percentageUsed = useMemo(() => {
    if (numericBudget <= 0) return 0;
    const percentage = (totalSpent / numericBudget) * 100;
    return isNaN(percentage) ? 0 : percentage;
  }, [numericBudget, totalSpent]);

  // Clamp percentage between 0 and 100 to prevent overflow
  const displayPercentage = Math.min(Math.round(percentageUsed), 100);

  // Calculate warning threshold
  const warningThreshold = numericBudget * 0.2;

  // Determine progress bar color based on percentage
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
        <span>Total Spent: ₹ {Math.round(totalSpent)}</span>
        <span>Remaining Budget: ₹ {Math.round(remainingBudget)}</span>
      </div>

      <div className="w-full bg-[var(--surface-2)] h-2.5 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${barColor}`}
          style={{ width: `${displayPercentage}%` }}
        />
      </div>

      <p className="text-sm text-muted">{displayPercentage}% used</p>

      {remainingBudget < 0 && (
        <p className="font-medium text-[var(--danger)]">Budget exceeded</p>
      )}

      {remainingBudget > 0 && remainingBudget <= warningThreshold && (
        <p className="font-medium text-[var(--accent)]">
          Budget is almost finished
        </p>
      )}
    </div>
  );
}

export default Budget;
