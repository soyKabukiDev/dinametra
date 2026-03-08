import axios from "axios";

// Cambiamos a CoinLore API porque CoinCap está presentando problemas de resolución DNS
// y CoinGecko bloquea entornos de nube. CoinLore es abierta y altamente compatible.
const API_URL = "https://api.coinlore.net/api";

export const getMarketData = async (limit = 5) => {
    try {
        const response = await axios.get(`${API_URL}/tickers/?limit=${limit}`);

        // Mapeamos los datos de CoinLore (price_usd, volume24) a nuestro formato estándar
        return response.data.data.map(coin => ({
            id: coin.id,
            symbol: coin.symbol,
            name: coin.name,
            current_price: parseFloat(coin.price_usd),
            total_volume: parseFloat(coin.volume24),
            // Usamos un servicio de iconos externo confiable
            image: `https://static.coinpaper.com/coin/64x64/${coin.nameid}.png`
        }));

    } catch (error) {
        console.error("ERROR fetching data:", error);
        throw error;
    }
};