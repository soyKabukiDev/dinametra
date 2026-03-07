import { Line } from "react-chartjs-2";
import "../utils/chartConfig";

const ChartPrice = ({ data }) => {
  if (!data || data.length === 0) return <p>No hay datos disponibles.</p>;

  const chartData = {
    labels: data.map((coin) => coin.name),
    datasets: [
      {
        label: "Precio USD",
        data: data.map((coin) => coin.current_price),
        borderColor: "#8884d8",
        backgroundColor: "rgba(136, 132, 216, 0.2)",
        tension: 0.4,
        fill: true,
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
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        grid: { color: "rgba(165, 74, 218, 0)" },
        ticks: {
          callback: function (value) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
          }
        }
      },
      x: { grid: { display: false } }
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col justify-center transition-transform duration-300 hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">Precio Crypto</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ChartPrice;