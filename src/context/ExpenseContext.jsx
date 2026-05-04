import { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState("");

  // LOAD from localStorage

  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");
    const savedBudget = localStorage.getItem("budget");

    if (savedExpenses) {
      try {
        const parsedExpenses = JSON.parse(savedExpenses);
        if (Array.isArray(parsedExpenses)) {
          setExpenses(parsedExpenses);
        }
      } catch {
        setExpenses([]);
      }
    }

    if (savedBudget !== null) {
      setBudget(savedBudget);
    }
  }, []);

  // SAVE to localStorage

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        setExpenses,
        budget,
        setBudget,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
