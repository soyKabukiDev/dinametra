import { useState } from "react";

const Filters = ({ onChange }) => {
  const [limit, setLimit] = useState(10);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setLimit(value);
    onChange(value);
  }
  return (
    <div className="filter-container">
      <label htmlFor="limit" className="filter-label">Mostrar:</label>

      <select
        id="limit"
        value={limit}
        onChange={handleChange}
        className="filter-select"
        aria-label="Seleccionar cantidad de criptomonedas a mostrar"
      >
        <option value="10">Top 10</option>
        <option value="25">Top 25</option>
        <option value="50">Top 50</option>
        <option value="100">Top 100</option>
      </select>
    </div>
  );
};

export default Filters;