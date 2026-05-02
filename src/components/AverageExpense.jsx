function AverageExpense({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h2>Average Expense</h2>
        <p>No expenses yet.</p>
      </div>
    );
  }

  // Calculate total
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  // Calculate average
  const average = Math.round(total / expenses.length);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Average Expense</h2>

      <p>₹ {average} per transaction</p>

      <p>Based on {expenses.length} expenses</p>
    </div>
  );
}

export default AverageExpense;
