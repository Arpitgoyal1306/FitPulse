import { exportToCSV } from "../utils/exportCSV";

function ExportButton({ expenses }) {
  return (
    <div className="m-2">
      <button
        onClick={() => exportToCSV(expenses)}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        disabled={!expenses || expenses.length === 0}
      >
        Download CSV Report
      </button>
    </div>
  );
}

export default ExportButton;
