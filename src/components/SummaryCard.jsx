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
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
        Summary
      </h2>

      {/* Total Expenses */}
      <div>
        <p className="text-slate-500 dark:text-slate-400">Total Expenses</p>

        <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
          {formatCurrency(safeTotal)}
        </h3>
      </div>

      {/* Transactions */}
      <div className="mt-5">
        <p className="text-slate-500 dark:text-slate-400">
          Number of Transactions
        </p>

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {safeCount}
        </h3>
      </div>

      {/* Average */}
      <div className="mt-5">
        <p className="text-slate-500 dark:text-slate-400">
          Average per Transaction
        </p>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {formatCurrency(average)}
        </h3>
      </div>
    </div>
  );
}

export default SummaryCard;
