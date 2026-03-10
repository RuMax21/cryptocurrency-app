import axios from "axios";

export const cryptoApi = axios.create({
  baseURL: import.meta.env.VITE_CRYPTO_API_URL,
  headers: {
    authorization: `Apikey ${import.meta.env.VITE_CRYPTO_API_KEY}`,
  },
});
