import { useState } from "react";

function ExpenseForm({ expenses, setExpenses }) {
  const [title, setTitle] = useState("");

  const [amount, setAmount] = useState("");

  const [category, setCategory] = useState("");

  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDATION
    if (!title || !amount || !category || !date) {
      alert("Please fill all fields");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    };

    setExpenses([...expenses, newExpense]);

    // RESET FORM
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>

        <option value="Food">Food</option>

        <option value="Travel">Travel</option>

        <option value="Bills">Bills</option>

        <option value="Shopping">Shopping</option>
      </select>

      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
