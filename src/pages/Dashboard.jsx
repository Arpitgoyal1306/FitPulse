import { useState } from "react";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Filter from "../components/Filter";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((exp) => exp.category === selectedCategory);

  return (
    <div>
      <h1>Dashboard</h1>
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ExpenseForm expenses={expenses} setExpenses={setExpenses} />

      <ExpenseList expenses={filteredExpenses} setExpenses={setExpenses} />
    </div>
  );
}

export default Dashboard;
