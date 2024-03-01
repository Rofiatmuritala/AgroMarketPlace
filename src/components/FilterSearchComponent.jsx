import React, { useState } from "react";

const FilterSearchComponent = ({
  sellers,
  items,
  setFilteredSellers,
  setFilteredItems,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    filterResults(term, filterType);
  };

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilterType(selectedFilter);
    filterResults(searchTerm, selectedFilter);
  };

  const filterResults = (term, filter) => {
    let filteredItems;
    let filteredSellers;

    if (filter === "sellers") {
      filteredSellers = sellers.filter((seller) =>
        seller.name.toLowerCase().includes(term)
      );
      setFilteredSellers(filteredSellers);
      setFilteredItems([]);
    } else if (filter === "items") {
      filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(term)
      );
      setFilteredItems(filteredItems);
      setFilteredSellers([]);
    } else {
      // Reset filters
      setFilteredSellers([]);
      setFilteredItems([]);
    }
  };

  return (
    <div>
      <select value={filterType} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="sellers">Sellers</option>
        <option value="items">Items</option>
      </select>
      <input
        type="text"
        placeholder="Search for sellers or items..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default FilterSearchComponent;
