function MonthlyReport({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h2>Component Title</h2>
        <p>No data available yet.</p>
      </div>
    );
  }

  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Filter expenses for current month
  const monthlyExpenses = expenses.filter((exp) => {
    const expenseDate = new Date(exp.date);

    return (
      expenseDate.getMonth() === currentMonth &&
      expenseDate.getFullYear() === currentYear
    );
  });

  // Total spent
  const monthlyTotal = monthlyExpenses.reduce(
    (sum, exp) => sum + exp.amount,
    0,
  );

  // Number of transactions
  const transactionCount = monthlyExpenses.length;

  // Average per day
  const daysSoFar = today.getDate();

  const averagePerDay =
    daysSoFar > 0 ? Math.round(monthlyTotal / daysSoFar) : 0;

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Monthly Report</h2>

      <p>Total spent this month:</p>
      <h3>₹ {monthlyTotal}</h3>

      <p>Number of transactions:</p>
      <h3>{transactionCount}</h3>

      <p>Average spending per day:</p>
      <h3>₹ {averagePerDay}</h3>
    </div>
  );
}

export default MonthlyReport;
