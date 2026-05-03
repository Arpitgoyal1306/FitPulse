function Filter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex-grow">
      <label
        htmlFor="category-filter"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        Filter by Category
      </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
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
