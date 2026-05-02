function Sort({ sortOption, setSortOption }) {
  return (
    <div>
      <h3>Sort Expenses</h3>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="date">Date (Newest)</option>

        <option value="amount">Amount (High → Low)</option>

        <option value="title">Title (A → Z)</option>
      </select>
    </div>
  );
}

export default Sort;
