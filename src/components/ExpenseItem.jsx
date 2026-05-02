import { useState } from "react";

function ExpenseItem({ exp, expenses, setExpenses }) {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(exp.title);
  const [amount, setAmount] = useState(exp.amount);
  const [category, setCategory] = useState(exp.category);
  const [date, setDate] = useState(exp.date);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expense?",
    );

    if (confirmDelete) {
      const updatedExpenses = expenses.filter((item) => item.id !== exp.id);

      setExpenses(updatedExpenses);
    }
  };

  const handleSave = () => {
    const updatedExpenses = expenses.map((item) =>
      item.id === exp.id
        ? {
            ...item,
            title,
            amount: Number(amount),
            category,
            date,
          }
        : item,
    );

    setExpenses(updatedExpenses);

    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          margin: "10px",
        }}
      >
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Bills">Bills</option>
          <option value="Shopping">Shopping</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={handleSave}>Save</button>

        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{exp.title}</h3>

      <p>Amount: ₹{exp.amount}</p>

      <p>Category: {exp.category}</p>

      <p>Date: {exp.date}</p>

      <button onClick={() => setIsEditing(true)}>Edit</button>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
