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
    <div className="chart-container">
      <h3>Vol Crypto</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartVolume;