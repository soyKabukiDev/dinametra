import ChartPrice from "./ChartPrice";
import ChartVolume from "./ChartVolume";
import Filters from "./Filters";
import "../styles/dashboard.css";
import { useState } from "react";
import { useCryptoData } from "../hooks/useCryptoData";

const Dashboard = () => {
  const [limit, setLimit] = useState(10);
  const { data, loading, error } = useCryptoData(limit);


  if (error) return <p className="error-msg">Error: {error.message || "Ocurrió un error"}</p>;

  return (
    <div className="dashboard">

      <header className="dashboard-header">
        <h1>Crypto Dashboard</h1>
      </header>

      <section className="dashboard-filters">
        <Filters onChange={setLimit} />
      </section>

      <section className="dashboard-charts">
        {loading ? (<p className="loading-msg">Cargando Gráficas...</p>) : (
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