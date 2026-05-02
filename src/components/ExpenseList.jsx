import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, setExpenses }) {
  if (expenses.length === 0) {
    return (
      <div
        style={{
          border: "1px dashed gray",
          padding: "15px",
          margin: "10px",
          textAlign: "center",
        }}
      >
        <p>No expenses yet.</p>
        <p>Add your first expense to get started.</p>
      </div>
    );
  }

  return (
    <div>
      {expenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          exp={exp}
          expenses={expenses}
          setExpenses={setExpenses}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
