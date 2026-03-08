import axios from "axios";

const API_URL = "/api/coingecko";

export const getMarketData = async (limit = 5) => {
    try {
        const response = await axios.get(
            `${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1`
        );
        return response.data;

    } catch (error) {
        console.error("ERROR:", error);
        throw error;
    }
};