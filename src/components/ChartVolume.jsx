import { Bar } from "react-chartjs-2";
import "../utils/chartConfig";

import { formatCompactNumber } from "../utils/formatters";

const ChartVolume = ({ data }) => {
  if (!data || data.length === 0) return <p>No hay datos disponibles.</p>;

  const chartData = {
    labels: data.map((coin) => coin.name),
    datasets: [
      {
        label: "Vol. del mercado",
        data: data.map((coin) => coin.total_volume),
        backgroundColor: "rgba(130, 202, 157, 0.6)",
        borderColor: "#82ca9d",
        borderWidth: 1,
        borderRadius: 4,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) { label += ': '; }
            if (context.parsed.y !== null) {
              label += formatCompactNumber(context.parsed.y);
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: {
          callback: function (value) {
            return formatCompactNumber(value);
          }
        }
      },
      x: { grid: { display: false } }
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col justify-center transition-transform duration-300 hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-4 text-emerald-400">Volumen de Mercado</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartVolume;