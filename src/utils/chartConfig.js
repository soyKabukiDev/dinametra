import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler
);

ChartJS.defaults.color = "#94a3b8";
ChartJS.defaults.scale.grid.color = "rgba(255, 255, 255, 0.05)";
ChartJS.defaults.font.family = "'Inter', sans-serif";