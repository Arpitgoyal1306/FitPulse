function Filter({ selectedCategory, setSelectedCategory }) {
  return (
    <div>
      <label
        htmlFor="category-filter"
        className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1"
      >
        Filter by Category
      </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
      >
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
        <option value="Shopping">Shopping</option>
      </select>
    </div>
  );
}

export default Filter;
