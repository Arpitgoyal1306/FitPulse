function Sort({ sortOption, setSortOption }) {
  return (
    <div className="flex-grow">
      <label
        htmlFor="sort"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        Sort Expenses
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
      >
        <option value="date">Date (Newest)</option>
        <option value="amount">Amount (High → Low)</option>
        <option value="title">Title (A → Z)</option>
      </select>
    </div>
  );
}

export default Sort;
