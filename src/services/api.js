import axios from "axios";

// Cambiamos a CoinCap API porque CoinGecko bloquea a Vercel con errores 403.
const API_URL = "https://api.coincap.io/v2";

export const getMarketData = async (limit = 5) => {
    try {
        const response = await axios.get(`${API_URL}/assets?limit=${limit}`);

        // Mapeamos los datos de CoinCap al formato que ya usa nuestra App
        return response.data.data.map(coin => ({
            id: coin.id,
            symbol: coin.symbol,
            name: coin.name,
            current_price: parseFloat(coin.priceUsd),
            total_volume: parseFloat(coin.volumeUsd24Hr),
            image: `https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`
        }));

    } catch (error) {
        console.error("ERROR fetching data:", error);
        throw error;
    }
};