function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <h3>Search Expense</h3>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
