function CategoryPreview({ expenses }) {
  const categoryTotals = {};

  // Calculate totals
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
      <h2>Quick Category Overview</h2>

      {Object.keys(categoryTotals).length === 0 ? (
        <p>No data available yet.</p>
      ) : (
        Object.entries(categoryTotals).map(([category, total]) => (
          <p key={category}>
            {category} — ₹ {total}
          </p>
        ))
      )}
    </div>
  );
}

export default CategoryPreview;
