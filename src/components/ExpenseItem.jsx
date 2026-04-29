function ExpenseItem({ exp, expenses, setExpenses }) {
  const handleDelete = () => {
    const updatedExpenses = expenses.filter((item) => item.id !== exp.id);

    setExpenses(updatedExpenses);
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{exp.title}</h3>

      <p>Amount: ₹{exp.amount}</p>

      <p>Category: {exp.category}</p>

      <p>Date: {exp.date}</p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
