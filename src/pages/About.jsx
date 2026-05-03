function About() {
  return (
    <div className="p-5 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
        About This Project
      </h1>

      <p className="mb-6 text-lg">
        HisabKitab is a personal expense tracking web application built using
        React. It helps users manage their spending, track budgets, and view
        financial reports.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Key Features</h2>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Add, edit, and delete expenses</li>
        <li>Budget tracking with progress bar</li>
        <li>Weekly and monthly reports</li>
        <li>Category-wise spending analysis</li>
        <li>Search, filter, and sorting</li>
        <li>Export data to CSV</li>
        <li>Dark mode support</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>

      <ul className="list-disc list-inside space-y-2">
        <li>React</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML5 & CSS3</li>
        <li>Tailwind CSS</li>
        <li>Local Storage for data persistence</li>
      </ul>
    </div>
  );
}

export default About;
