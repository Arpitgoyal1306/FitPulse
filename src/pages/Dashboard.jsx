import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCard from "../components/SummaryCard";
import RecentTransactions from "../components/RecentTransactions";
import ResetButton from "../components/ResetButton";
import Budget from "../components/Budget";
import BudgetStatus from "../components/BudgetStatus";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import CategoryPreview from "../components/CategoryPreview";

function Dashboard() {
  // All data comes from shared context - this fixes the data disappearing bug
  const { expenses, setExpenses, budget, setBudget } =
    useContext(ExpenseContext);

  // Search, filter, sort are local UI state - fine to keep here
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("date");

  const totalSpent = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount || 0),
    0,
  );

  // Apply search, filter, sort to expenses for the list
  const filteredExpenses = expenses
    .filter((exp) => {
      const matchesSearch = exp.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || exp.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOption === "amount") return Number(b.amount) - Number(a.amount);
      if (sortOption === "title") return a.title.localeCompare(b.title);
      // default: date newest first
      return new Date(b.date) - new Date(a.date);
    });

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Track and manage your expenses in one place.
        </p>
      </div>

      {/* Summary + Budget side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
          <SummaryCard
            totalSpent={totalSpent}
            transactionCount={expenses.length}
          />
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
          <Budget
            budget={budget}
            setBudget={setBudget}
            totalSpent={totalSpent}
          />
        </div>
      </div>

      {/* Budget Status - only shows when budget is set */}
      <BudgetStatus budget={budget} totalSpent={totalSpent} />

      {/* Add Expense Form + Recent Transactions side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
        <RecentTransactions expenses={expenses} />
      </div>

      {/* Category Preview */}
      <CategoryPreview expenses={expenses} />

      {/* Search + Filter + Sort in one row */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Search, Filter, and Sort
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Sort sortOption={sortOption} setSortOption={setSortOption} />
        </div>
      </div>

      {/* Expense List */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            All Expenses
          </h2>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {filteredExpenses.length} items
          </span>
        </div>
        <ExpenseList
          expenses={filteredExpenses}
          setExpenses={setExpenses}
          allExpenses={expenses}
        />
      </div>

      {/* Reset */}
      <ResetButton setExpenses={setExpenses} setBudget={setBudget} />
    </div>
  );
}

export default Dashboard;
