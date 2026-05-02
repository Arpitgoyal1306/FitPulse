export function exportToCSV(expenses) {
  // Safety check
  if (!expenses || expenses.length === 0) {
    alert("No expenses to export");
    return;
  }

  // CSV headers
  const headers = ["Title", "Amount", "Category", "Date"];

  // Convert expenses into rows
  const rows = expenses.map((exp) => [
    exp.title,
    exp.amount,
    exp.category,
    exp.date,
  ]);

  // Combine headers and rows
  const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n");

  // Create downloadable file
  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "expenses_report.csv";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
