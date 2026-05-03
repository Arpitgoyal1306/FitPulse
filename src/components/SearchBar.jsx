function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex-grow">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        Search Expense
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
      />
    </div>
  );
}

export default SearchBar;
