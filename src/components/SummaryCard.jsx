function SummaryCard({ totalSpent, transactionCount }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        backgroundColor: "#222",
      }}
    >
      <h2>Summary</h2>

      <p>Total Expenses:</p>
      <h3>₹ {totalSpent}</h3>

      <p>Number of Transactions:</p>
      <h3>{transactionCount}</h3>
    </div>
  );
}

export default SummaryCard;
