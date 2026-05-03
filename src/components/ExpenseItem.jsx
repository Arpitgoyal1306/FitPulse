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
      <div className="border rounded-lg p-4 bg-gray-50 space-y-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Bills</option>
          <option>Shopping</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>

          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-lg">{exp.title}</h3>

        <p className="text-gray-600">₹{exp.amount}</p>

        <p className="text-sm text-gray-500">
          {exp.category} • {exp.date}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
