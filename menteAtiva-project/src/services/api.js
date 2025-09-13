import axios from "axios";

const baseURL = import.meta.env.DEV ? import.meta.env.VITE_API_URL_LOCAL : import.meta.env.VITE_API_URL_PRODUCTION

const api = axios.create({
  baseURL,  
});

export { api };