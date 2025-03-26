import React from 'react';

const StockFilter = ({ setInStockFilter }) => {
  const handleStockChange = (status) => {
    setInStockFilter(status);
  };

  return (
    <aside className="w-1/4 bg-white p-8">
      <h2 className="catname">Availability</h2>
      <ul className="ul">
        <li>
          <label>
            <input
              type="checkbox"
              onChange={() => handleStockChange(true)}
            />
            In Stock
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              onChange={() => handleStockChange(false)}
            />
            Out of Stock
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              onChange={() => handleStockChange(null)}
            />
            All Products
          </label>
        </li>
      </ul>
    </aside>
  );
};

export default StockFilter;
