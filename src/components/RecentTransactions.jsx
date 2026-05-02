function RecentTransactions({ expenses }) {
  // Sort by date (newest first)
  const recentExpenses = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Recent Transactions</h2>

      {recentExpenses.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        recentExpenses.map((exp) => (
          <div key={exp.id}>
            <strong>{exp.title}</strong> — ₹{exp.amount}
          </div>
        ))
      )}
    </div>
  );
}

export default RecentTransactions;
