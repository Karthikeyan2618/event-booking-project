import React, { useState, useEffect, useCallback } from 'react';
import './Filters.css';

const Filters = ({ 
  filters, 
  onFiltersChange, 
  categories, 
  locations,
  viewMode,
  onViewModeChange,
  loading = false
}) => {
  const [searchTerm, setSearchTerm] = useState(filters.search || '');
  const [debouncedSearch, setDebouncedSearch] = useState(filters.search || '');

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    onFiltersChange({ ...filters, search: debouncedSearch });
  }, [debouncedSearch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    onFiltersChange({ ...filters, category: e.target.value });
  };

  const handleLocationChange = (e) => {
    onFiltersChange({ ...filters, location: e.target.value });
  };

  const handlePriceRangeChange = (min, max) => {
    onFiltersChange({ ...filters, minPrice: min, maxPrice: max });
  };

  const handleRatingChange = (rating) => {
    onFiltersChange({ ...filters, minRating: rating });
  };

  const clearFilters = () => {
    setSearchTerm('');
    onFiltersChange({
      search: '',
      category: 'All',
      location: 'All',
      minPrice: 0,
      maxPrice: 2000,
      minRating: 0
    });
  };

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h2>Filters</h2>
        <button onClick={clearFilters} className="clear-filters-btn">
          Clear All
        </button>
      </div>

      {/* Search Input */}
      <div className="filter-group">
        <label htmlFor="search">Search Services</label>
        <input
          id="search"
          type="text"
          placeholder="Search by name or description..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* View Mode Toggle */}
      <div className="filter-group">
        <label>View Mode</label>
        <div className="view-mode-toggle">
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => onViewModeChange('grid')}
          >
            Grid
          </button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => onViewModeChange('list')}
          >
            List
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="filter-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={filters.category}
          onChange={handleCategoryChange}
          className="filter-select"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Location Filter */}
      <div className="filter-group">
        <label htmlFor="location">Location</label>
        <select
          id="location"
          value={filters.location}
          onChange={handleLocationChange}
          className="filter-select"
        >
          {locations.map(location => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <label>Price Range: ${filters.minPrice} - ${filters.maxPrice}</label>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => handlePriceRangeChange(Number(e.target.value), filters.maxPrice)}
            className="price-input"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => handlePriceRangeChange(filters.minPrice, Number(e.target.value))}
            className="price-input"
          />
        </div>
      </div>

      {/* Rating Filter */}
      <div className="filter-group">
        <label>Minimum Rating</label>
        <div className="rating-filter">
          {[0, 1, 2, 3, 4, 5].map(rating => (
            <button
              key={rating}
              className={`rating-btn ${filters.minRating === rating ? 'active' : ''}`}
              onClick={() => handleRatingChange(rating)}
            >
              {rating === 0 ? 'Any' : `${rating}+`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
