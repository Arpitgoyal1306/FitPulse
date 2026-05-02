import { useState, useEffect } from "react";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import Budget from "../components/Budget";
import Sort from "../components/Sort";
import ResetButton from "../components/ResetButton";
import SummaryCard from "../components/SummaryCard";
import RecentTransactions from "../components/RecentTransactions";
import BudgetStatus from "../components/BudgetStatus";
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

  return (
    <div>
      <h1>Dashboard</h1>

      <Budget budget={budget} setBudget={setBudget} totalSpent={totalSpent} />

      <BudgetStatus budget={budget} totalSpent={totalSpent} />

      <SummaryCard
        totalSpent={totalSpent}
        transactionCount={transactionCount}
      />

      <RecentTransactions expenses={expenses} />

      <CategoryPreview expenses={expenses} />

      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Sort sortOption={sortOption} setSortOption={setSortOption} />

      <ExpenseForm expenses={expenses} setExpenses={setExpenses} />

      <ExpenseList expenses={filteredExpenses} setExpenses={setExpenses} />

      <ResetButton setExpenses={setExpenses} setBudget={setBudget} />
    </div>
  );
}

export default Dashboard;
