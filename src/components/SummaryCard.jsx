function SummaryCard({ totalSpent, transactionCount }) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 p-4 m-2 rounded-lg bg-gray-800 text-white shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Summary</h2>

      <div>
        <p className="text-gray-400">Total Expenses:</p>
        <h3 className="text-2xl font-bold">₹ {totalSpent}</h3>
      </div>

      <div className="mt-4">
        <p className="text-gray-400">Number of Transactions:</p>
        <h3 className="text-2xl font-bold">{transactionCount}</h3>
      </div>
    </div>
  );
}

export default SummaryCard;
