function CategoryCount({ expenses }) {
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
  const categoryCounts = {};

  // Count number of expenses per category
  expenses.forEach((exp) => {
    if (categoryCounts[exp.category]) {
      categoryCounts[exp.category] += 1;
    } else {
      categoryCounts[exp.category] = 1;
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
      <h2>Expense Count by Category</h2>

      {Object.keys(categoryCounts).length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        Object.entries(categoryCounts).map(([category, count]) => (
          <p key={category}>
            {category} — {count} expenses
          </p>
        ))
      )}
    </div>
  );
}

export default CategoryCount;
