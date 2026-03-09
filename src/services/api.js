import axios from "axios";


const API_URL = "https://api.coinlore.net/api";

export const getMarketData = async (limit = 5) => {
    try {
        const response = await axios.get(`${API_URL}/tickers/?limit=${limit}`);


        return response.data.data.map(coin => ({
            id: coin.id,
            symbol: coin.symbol,
            name: coin.name,
            current_price: parseFloat(coin.price_usd),
            total_volume: parseFloat(coin.volume24),
            image: `https://static.coinpaper.com/coin/64x64/${coin.nameid}.png`
        }));

    } catch (error) {
        console.error("ERROR fetching data:", error);
        throw error;
    }
};