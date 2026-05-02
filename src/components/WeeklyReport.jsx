function WeeklyReport({ expenses }) {
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

  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(today.getDate() - 7);

  const weeklyExpenses = expenses.filter((exp) => {
    const expenseDate = new Date(exp.date);

    return expenseDate >= sevenDaysAgo && expenseDate <= today;
  });

  const weeklyTotal = weeklyExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div>
      <h2>Weekly Report</h2>

      <p>Total spent in last 7 days:</p>

      <h3>₹ {weeklyTotal}</h3>

      <p>Number of transactions:</p>

      <h3>{weeklyExpenses.length}</h3>
    </div>
  );
}

export default WeeklyReport;
