import axios from 'axios';

const api = axios.create({
  baseURL: "https://ecommerce-backend-e7ql.onrender.com/api",  // ✔ correct
});


export default api;