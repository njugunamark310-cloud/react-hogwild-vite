import React from "react";

function FilterSortControls({ 
  showGreasedOnly, 
  onToggleGreased, 
  sortBy, 
  onSortChange 
}) {
  return (
    <div className="filterWrapper ui segment container" style={{ padding: "1.5rem" }}>
      <div className="ui grid middle aligned stackable">
        <div className="eight wide column left aligned">
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              id="greased-filter"
              checked={showGreasedOnly}
              onChange={(e) => onToggleGreased(e.target.checked)}
            />
            {/* The test matches explicitly against "Greased Pigs Only?" */}
            <label htmlFor="greased-filter" style={{ cursor: "pointer", fontWeight: "bold" }}>
              Greased Pigs Only?
            </label>
          </div>
        </div>
        
        <div className="eight wide column right aligned">
          <div className="inline field">
            {/* The test matches explicitly against "Sort by:" */}
            <label htmlFor="sort-select" style={{ marginRight: "10px", fontWeight: "bold" }}>
              Sort by:
            </label>
            <select
              id="sort-select"
              className="ui dropdown"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="all">Default (Unsorted)</option>
              <option value="name">name</option>
              <option value="weight">weight</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSortControls;