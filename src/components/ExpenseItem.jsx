import { useEffect, useState } from "react";

function ExpenseItem({ exp, expenses, setExpenses }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!exp) return;
    setTitle(exp.title ?? "");
    setAmount(exp.amount ?? "");
    setCategory(exp.category ?? "");
    setDate(exp.date ?? "");
  }, [exp]);

  if (!exp) {
    return null;
  }

  const handleDelete = () => {
    const next = expenses.filter((item) => item.id !== exp.id);
    setExpenses(next);
  };

  const handleSave = () => {
    if (!title || !amount || !category || !date) {
      alert("Please fill out all fields.");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Amount must be greater than zero.");
      return;
    }

    const next = expenses.map((item) =>
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

    setExpenses(next);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(exp.title ?? "");
    setAmount(exp.amount ?? "");
    setCategory(exp.category ?? "");
    setDate(exp.date ?? "");
    setIsEditing(false);
  };

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-4 sm:p-5">
      {isEditing ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              min="1"
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
            >
              <option value="">Select</option>
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
            />
          </div>

          <div className="sm:col-span-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {exp.title}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {exp.category} · {exp.date}
            </p>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-4">
            <span className="text-base font-semibold text-slate-900 dark:text-slate-100">
              {formatCurrency(exp.amount)}
            </span>
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="px-3 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpenseItem;
