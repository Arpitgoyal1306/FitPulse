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

    setExpenses((prev) => [...prev, newExpense]);

    // Clear form
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 space-y-5"
    >
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Add New Expense
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Fill out the details below to track your spending.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="e.g. Grocery shopping"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Amount
          </label>
          <input
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            min="1"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            required
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
