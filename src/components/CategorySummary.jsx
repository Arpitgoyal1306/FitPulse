function CategorySummary({ expenses }) {
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
  const categoryTotals = {};

  // Calculate totals per category

  expenses.forEach((exp) => {
    if (categoryTotals[exp.category]) {
      categoryTotals[exp.category] += exp.amount;
    } else {
      categoryTotals[exp.category] = exp.amount;
    }
  });

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2>Category-wise Spending</h2>

      {Object.keys(categoryTotals).length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        Object.entries(categoryTotals).map(([category, total]) => (
          <p key={category}>
            {category}: ₹ {total}
          </p>
        ))
      )}
    </div>
  );
}

export default CategorySummary;
