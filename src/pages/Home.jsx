import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Link } from "react-router-dom";

function Home() {
  // Use context so Home always shows live data, not stale localStorage snapshot
  const { expenses, budget } = useContext(ExpenseContext);

  const totalSpent = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount || 0),
    0,
  );
  const transactionCount = expenses.length;
  const numericBudget = Number(budget) || 0;
  const remaining = numericBudget > 0 ? numericBudget - totalSpent : null;

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
          Welcome to HisabKitab
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
          Track every rupee with clarity. Get a quick snapshot of spending,
          budgets, and recent activity.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/reports"
            className="bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-5 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition font-medium"
          >
            View Reports
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Total Spent
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-1">
            ₹ {totalSpent.toLocaleString("en-IN")}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Transactions
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-1">
            {transactionCount}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Budget Remaining
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-1">
            {remaining !== null
              ? `₹ ${remaining.toLocaleString("en-IN")}`
              : "Not set"}
          </h2>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-900/30 p-6">
        <p className="text-blue-800 dark:text-blue-300 font-medium">
          Use the Dashboard to add, edit, and manage your expenses quickly.
        </p>
      </div>
    </div>
  );
}

export default Home;
