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

  // LOAD DATA

  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");
    const savedBudget = localStorage.getItem("budget");

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }

    if (savedBudget) {
      setBudget(savedBudget);
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
      if (sortOption === "amount") {
        return b.amount - a.amount;
      }

      if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      }

      if (sortOption === "date") {
        return new Date(b.date) - new Date(a.date);
      }

      return 0;
    });

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const transactionCount = expenses.length;

  const remaining = (Number(budget) || 0) - totalSpent;

  return (
    <div className="space-y-8">
      {/* PAGE HEADER */}

      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        <p className="text-gray-500 mt-2">
          Track your expenses and monitor your budget.
        </p>
      </div>

      {/* SUMMARY CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Spent */}

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Total Spent</p>

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

        {/* Budget */}

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Budget</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            ₹ {budget || 0}
          </h2>
        </div>

        {/* Remaining */}

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Remaining</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            ₹ {remaining}
          </h2>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}

        <div className="lg:col-span-2 space-y-6">
          {/* Budget */}

          <div className="bg-white rounded-xl shadow p-6">
            <Budget
              budget={budget}
              setBudget={setBudget}
              totalSpent={totalSpent}
            />
          </div>

          {/* Filters */}

          <div className="bg-white rounded-xl shadow p-6 space-y-4">
            <Filter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <Sort sortOption={sortOption} setSortOption={setSortOption} />
          </div>

          {/* Expense Form */}

          <div className="bg-white rounded-xl shadow p-6">
            <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
          </div>

          {/* Expense List */}

          <div className="bg-white rounded-xl shadow p-6">
            <ExpenseList
              expenses={filteredExpenses}
              setExpenses={setExpenses}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-6">
          {/* Recent Transactions */}

          <div className="bg-white rounded-xl shadow p-6">
            <RecentTransactions expenses={expenses} />
          </div>

          {/* Category Preview */}

          <div className="bg-white rounded-xl shadow p-6">
            <CategoryPreview expenses={expenses} />
          </div>

          {/* Reset */}

          <div className="bg-white rounded-xl shadow p-6">
            <ResetButton setExpenses={setExpenses} setBudget={setBudget} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
