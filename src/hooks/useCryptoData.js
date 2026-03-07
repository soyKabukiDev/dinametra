import { useState, useEffect } from "react";
import { getMarketData } from "../services/api";

export const useCryptoData = (limit = 10) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(null); // Reseteamos el error antes de un nuevo intento

        const fetchData = async () => {
            try {
                const result = await getMarketData(limit);
                if (isMounted) setData(result);
            } catch (err) {
                if (isMounted) {
                    // CoinGecko devuelve un 429 (Too Many Requests) si llamas muy rápido.
                    if (err.response && err.response.status === 429) {
                        setError(new Error("Límite de la API alcanzado. Espera un minuto."));
                    } else {
                        setError(err);
                    }
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        // Un pequeño retraso "Debounce" para evitar que el usuario spammee la API al cambiar muy rápido
        const timeoutId = setTimeout(() => {
            fetchData();
        }, 500);

        return () => {
            isMounted = false;
            clearTimeout(timeoutId); // Limpiamos el timeout si cambia antes de los 500ms
        };
    }, [limit]);

    return { data, loading, error };
};