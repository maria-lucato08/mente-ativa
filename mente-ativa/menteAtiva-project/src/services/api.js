import axios from "axios";

const api = axios.create({
  baseURL:"https://mente-ativa-zopy.vercel.app/api",
});

export { api };