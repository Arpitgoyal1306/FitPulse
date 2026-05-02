function Budget({ budget, setBudget, totalSpent }) {
  const numericBudget = Number(budget) || 0;

  const remaining = numericBudget - totalSpent;

  const warningThreshold = numericBudget * 0.2;

  // Calculate percentage used
  const percentUsed =
    numericBudget > 0
      ? Math.min(Math.round((totalSpent / numericBudget) * 100), 100)
      : 0;

  // Choose color
  let barColor = "green";

  if (percentUsed >= 80) {
    barColor = "orange";
  }

  if (percentUsed >= 100) {
    barColor = "red";
  }

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Budget</h2>

      <input
        type="number"
        placeholder="Enter Monthly Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <p>Total Spent: ₹ {totalSpent}</p>

      <p>Remaining Budget: ₹ {remaining}</p>

      {/* Progress Bar */}

      <div
        style={{
          width: "100%",
          backgroundColor: "#ccc",
          height: "20px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: percentUsed + "%",
            height: "100%",
            backgroundColor: barColor,
            transition: "0.3s",
          }}
        />
      </div>

      <p>{percentUsed}% used</p>

      {/* Warnings */}

      {remaining < 0 && <p style={{ color: "red" }}>⚠ Budget Exceeded</p>}

      {remaining > 0 && remaining <= warningThreshold && (
        <p style={{ color: "orange" }}>⚠ Budget is almost finished</p>
      )}
    </div>
  );
}

export default Budget;
