function BudgetStatus({ budget, totalSpent }) {
  const numericBudget = Number(budget) || 0;

  const remaining = numericBudget - totalSpent;

  if (numericBudget === 0) {
    return null;
  }

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Budget Status</h2>

      {remaining >= 0 ? (
        <p style={{ color: "green" }}>
          You are within your budget. Remaining: ₹ {remaining}
        </p>
      ) : (
        <p style={{ color: "red" }}>
          You have exceeded your budget. Overspent: ₹ {Math.abs(remaining)}
        </p>
      )}
    </div>
  );
}

export default BudgetStatus;
