import { exportToCSV } from "../utils/exportCSV";

function ExportButton({ expenses }) {
  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      <button onClick={() => exportToCSV(expenses)}>Download CSV Report</button>
    </div>
  );
}

export default ExportButton;
