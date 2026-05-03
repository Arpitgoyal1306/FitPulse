import { useEffect, useState } from "react";

function Home() {
  const [totalSpent, setTotalSpent] = useState(0);
  const [transactionCount, setTransactionCount] = useState(0);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

    const total = savedExpenses.reduce((sum, exp) => sum + exp.amount, 0);

    setTotalSpent(total);
    setTransactionCount(savedExpenses.length);
  }, []);

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to HisabKitab
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your daily expenses and track your spending easily.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Expenses */}
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Total Expenses</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            ₹ {totalSpent}
          </h2>
        </div>

        {/* Transactions */}
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Transactions</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            {transactionCount}
          </h2>
        </div>
      </div>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <p className="text-blue-800">
          Use the Dashboard to add, edit, and manage your expenses.
        </p>
      </div>
    </div>
  );
}

export default Home;
