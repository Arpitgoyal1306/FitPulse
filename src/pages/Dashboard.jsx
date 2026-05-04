import { useState, useEffect } from "react";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import Budget from "../components/Budget";
import Sort from "../components/Sort";
import ResetButton from "../components/ResetButton";
import RecentTransactions from "../components/RecentTransactions";
import CategoryPreview from "../components/CategoryPreview";

function Dashboard() {
  // STATES

  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [budget, setBudget] = useState("");
  const [sortOption, setSortOption] = useState("date");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // LOAD DATA

  useEffect(() => {
    try {
      setLoading(true);

      const savedExpenses = localStorage.getItem("expenses");

      const savedBudget = localStorage.getItem("budget");

      if (savedExpenses) {
        setExpenses(JSON.parse(savedExpenses));
      }

      if (savedBudget) {
        setBudget(savedBudget);
      }
    } catch (err) {
      setError("Failed to load data. Please refresh.");
    } finally {
      setLoading(false);
    }
  }, []);

  // SAVE DATA

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  // FILTER + SEARCH + SORT

  const filteredExpenses = expenses
    .filter((exp) =>
      selectedCategory === "All" ? true : exp.category === selectedCategory,
    )
    .filter((exp) =>
      (exp.title || "").toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOption === "amount") return b.amount - a.amount;

      if (sortOption === "title") return a.title.localeCompare(b.title);

      if (sortOption === "date") return new Date(b.date) - new Date(a.date);

      return 0;
    });

  const totalSpent = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  const transactionCount = expenses.length;

  const remaining = (Number(budget) || 0) - totalSpent;

  /*
  IMPORTANT: These two checks must be
  BEFORE the main return.
  */

  if (loading) {
    return <div className="p-10 text-center">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="p-10 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}

      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Dashboard
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Track your expenses and monitor your budget.
        </p>
      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Total Spent</p>

          <h2 className="text-2xl font-bold">₹ {totalSpent}</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Transactions</p>

          <h2 className="text-2xl font-bold">{transactionCount}</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Budget</p>

          <h2 className="text-2xl font-bold">₹ {budget || 0}</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Remaining</p>

          <h2
            className={`text-2xl font-bold ${
              remaining < 0 ? "text-red-600" : ""
            }`}
          >
            ₹ {remaining}
          </h2>
        </div>
      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <Budget
              budget={budget}
              setBudget={setBudget}
              totalSpent={totalSpent}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4">
            <Filter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <Sort sortOption={sortOption} setSortOption={setSortOption} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <ExpenseList
              expenses={filteredExpenses}
              setExpenses={setExpenses}
            />
          </div>
        </div>

        {/* RIGHT */}

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <RecentTransactions expenses={expenses} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <CategoryPreview expenses={expenses} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <ResetButton setExpenses={setExpenses} setBudget={setBudget} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
