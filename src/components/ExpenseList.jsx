import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, setExpenses }) {
  if (expenses.length === 0) {
    return (
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 p-6 m-2 text-center rounded-lg bg-gray-50 dark:bg-gray-800/50">
        <p className="text-gray-500 dark:text-gray-400">No expenses yet.</p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">
          Add your first expense to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
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
