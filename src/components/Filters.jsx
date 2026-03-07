import { useState } from "react";

const Filters = ({ onChange }) => {
  const [limit, setLimit] = useState(5);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setLimit(value);
    onChange(value);
  }
  return (
    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 shadow-sm backdrop-blur-md">
      <label htmlFor="limit" className="text-slate-300 font-medium tracking-wide">Mostrar:</label>

      <select
        id="limit"
        value={limit}
        onChange={handleChange}
        className="bg-slate-800 text-slate-100 border border-slate-600 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer hover:bg-slate-700"
        aria-label="Seleccionar cantidad de criptomonedas a mostrar"
      >
        <option value="5">Top 5</option>
        <option value="10">Top 10</option>
        <option value="25">Top 25</option>
        <option value="50">Top 50</option>
        <option value="100">Top 100</option>
      </select>
    </div>
  );
};

export default Filters;