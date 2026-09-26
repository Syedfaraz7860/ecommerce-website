import axios from "axios";

const api = axios.create({
  baseURL: "https://ecommerce-backend-e7ql.onrender.com/api",
});

export default api;