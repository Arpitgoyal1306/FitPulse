import ExpenseItem from "./ExpenseItem";


function ExpenseList({ expenses, setExpenses }) {
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
