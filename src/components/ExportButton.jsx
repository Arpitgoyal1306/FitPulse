import { exportToCSV } from "../utils/exportCSV";

function ExportButton({ expenses }) {
  return (
    <button
      onClick={() => exportToCSV(expenses)}
      className="w-full sm:w-auto bg-blue-600 text-white py-2.5 px-5 rounded-lg hover:bg-blue-700 transition font-medium disabled:opacity-50"
      disabled={!expenses || expenses.length === 0}
    >
      Download CSV Report
    </button>
  );
}

export default ExportButton;
