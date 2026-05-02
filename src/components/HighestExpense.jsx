function HighestExpense({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h2>Highest Expense</h2>
        <p>No expenses yet.</p>
      </div>
    );
  }

  // Find highest expense
  const highest = expenses.reduce(
    (max, exp) => (exp.amount > max.amount ? exp : max),
    expenses[0],
  );

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Highest Expense</h2>

      <p>
        <strong>{highest.title}</strong>
      </p>

      <p>Amount: ₹ {highest.amount}</p>

      <p>Category: {highest.category}</p>

      <p>Date: {highest.date}</p>
    </div>
  );
}

export default HighestExpense;
