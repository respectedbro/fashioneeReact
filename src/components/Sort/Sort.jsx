const Sort = ({ onSortChange }) => {
  return (
    <div className="sort-and-count">
      <div className="products-count">
        There are <span className="bold">67</span> products in this category
      </div>
      <div className="sort">
        <select
          className="input"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="RELEVANCE">Relevance</option>
          <option value="from-a">from A to Z</option>
          <option value="from-z">from Z to A</option>
          <option value="ASC">from low to high</option>
          <option value="DESC">from high to low</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
