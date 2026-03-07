import ChartPrice from "./ChartPrice";
import ChartVolume from "./ChartVolume";
import Filters from "./Filters";
import { useState } from "react";
import { useCryptoData } from "../hooks/useCryptoData";

const Dashboard = () => {
  const [limit, setLimit] = useState(5);
  const { data, loading, error } = useCryptoData(limit);


  if (error) return <p className="text-red-400 text-center font-medium mt-10">Error: {error.message || "Ocurrió un error"}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col gap-8 min-h-screen">

      <header className="flex flex-col sm:flex-row justify-between items-center bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4 sm:mb-0">
          Crypto Dashboard
        </h1>
        <Filters onChange={setLimit} />
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {loading ? (
          <div className="col-span-1 lg:col-span-2 flex justify-center items-center py-20">
            <p className="text-xl font-medium text-slate-400 animate-pulse">Cargando Gráficas...</p>
          </div>
        ) : (
          <>
            <ChartPrice data={data} />
            <ChartVolume data={data} />
          </>
        )}
      </section>

    </div>
  );
};

export default Dashboard;