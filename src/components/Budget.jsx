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
      <h2 className="text-xl font-semibold text-gray-800">Budget</h2>

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
        className="w-full p-2 border rounded-lg"
      />

      <p className="text-gray-700">Total Spent: ₹ {totalSpent}</p>

      <p className="text-gray-700">Remaining Budget: ₹ {remaining}</p>

      <div className="w-full bg-gray-200 h-5 rounded-lg overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${barColor}`}
          style={{ width: percentUsed + "%" }}
        />
      </div>

      <p className="text-sm text-gray-600">{percentUsed}% used</p>

      {remaining < 0 && (
        <p className="text-red-600 font-medium">⚠ Budget Exceeded</p>
      )}

      {remaining > 0 && remaining <= warningThreshold && (
        <p className="text-orange-600 font-medium">
          ⚠ Budget is almost finished
        </p>
      )}
    </div>
  );
}

export default Budget;
