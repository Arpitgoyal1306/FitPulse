import { useState, useEffect } from "react";
import WeeklyReport from "../components/WeeklyReport";
import CategorySummary from "../components/CategorySummary";
import ExportButton from "../components/ExportButton";
import MonthlyReport from "../components/MonthlyReport";
import CategoryCount from "../components/CategoryCount";
import HighestExpense from "../components/HighestExpense";
import AverageExpense from "../components/AverageExpense";

export default function Reports() {
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage

  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  return (
    <div>
      <h1>Reports</h1>

      <WeeklyReport expenses={expenses} />

      <MonthlyReport expenses={expenses} />

      <CategorySummary expenses={expenses} />

      <CategoryCount expenses={expenses} />

      <HighestExpense expenses={expenses} />

      <AverageExpense expenses={expenses} />

      <ExportButton expenses={expenses} />
    </div>
  );
}
