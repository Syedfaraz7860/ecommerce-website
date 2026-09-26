import axios from 'axios';

const api = axios.create({
  // baseURL: "https://ecommerce-backend-e7ql.onrender.com/api",  // ✔ correct
   baseURL: "http://localhost:5001/api"
});


export default api;