function SummaryCard({ totalSpent, transactionCount }) {
  const safeTotal = Number(totalSpent) || 0;
  const safeCount = Number(transactionCount) || 0;

  // Average per transaction
  const average = safeCount > 0 ? Math.round(safeTotal / safeCount) : 0;

  // Currency formatter
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  return (
    <div className="border border-gray-300 dark:border-gray-700 p-5 m-2 rounded-lg bg-gray-900 text-white shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>

      {/* Total Expenses */}
      <div>
        <p className="text-gray-400">Total Expenses</p>

        <h3 className="text-3xl font-bold">{formatCurrency(safeTotal)}</h3>
      </div>

      {/* Transactions */}
      <div className="mt-5">
        <p className="text-gray-400">Number of Transactions</p>

        <h3 className="text-2xl font-bold">{safeCount}</h3>
      </div>

      {/* Average */}
      <div className="mt-5">
        <p className="text-gray-400">Average per Transaction</p>

        <h3 className="text-xl font-semibold">{formatCurrency(average)}</h3>
      </div>
    </div>
  );
}

export default SummaryCard;
