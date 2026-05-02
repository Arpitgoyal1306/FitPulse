function Home() {
  const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

  const totalSpent = savedExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  const transactionCount = savedExpenses.length;

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Welcome to HisabKitab</h1>

      <p>
        A simple expense tracking application to help you manage your daily
        spending.
      </p>

      <hr />

      <h2>Quick Overview</h2>

      <p>Total Expenses: ₹{totalSpent}</p>

      <p>
        Number of Transactions:
        {transactionCount}
      </p>

      <p>Use the Dashboard to add and manage your expenses.</p>
    </div>
  );
}

export default Home;
