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
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Financial Reports
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <WeeklyReport expenses={expenses} />
        <MonthlyReport expenses={expenses} />
        <HighestExpense expenses={expenses} />
        <AverageExpense expenses={expenses} />
        <CategorySummary expenses={expenses} />
        <CategoryCount expenses={expenses} />
      </div>

      <div className="mt-6">
        <ExportButton expenses={expenses} />
      </div>
    </div>
  );
}
