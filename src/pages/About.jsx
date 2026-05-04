function About() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
          About This Project
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl">
          HisabKitab is a personal expense tracker built to make money
          management feel simple and focused. Track daily spending, stay within
          budget, and explore clear reports.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
            Key Features
          </h2>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li>Add, edit, and delete expenses</li>
            <li>Budget tracking with progress bar</li>
            <li>Weekly and monthly reports</li>
            <li>Category-wise spending analysis</li>
            <li>Search, filter, and sorting</li>
            <li>Export data to CSV</li>
            <li>Dark mode support</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
            Technologies Used
          </h2>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
            <li>Local Storage for data persistence</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
