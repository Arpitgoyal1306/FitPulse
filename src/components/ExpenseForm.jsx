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
      alert("Please fill out all fields.");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Amount must be greater than zero.");
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

    // Clear form
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 my-5 border rounded-lg bg-white dark:bg-gray-800 shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Add New Expense
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200"
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
        <option value="Shopping">Shopping</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
