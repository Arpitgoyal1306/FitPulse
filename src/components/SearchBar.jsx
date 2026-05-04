function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <label
        htmlFor="search"
        className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1"
      >
        Search Expense
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
      />
    </div>
  );
}

export default SearchBar;
