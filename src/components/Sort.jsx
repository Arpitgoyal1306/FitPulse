function Sort({ sortOption, setSortOption }) {
  return (
    <div>
      <label
        htmlFor="sort"
        className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1"
      >
        Sort Expenses
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
      >
        <option value="date">Date (Newest)</option>
        <option value="amount">Amount (High → Low)</option>
        <option value="title">Title (A → Z)</option>
      </select>
    </div>
  );
}

export default Sort;
