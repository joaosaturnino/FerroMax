import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // URL do nosso back-end Node.js
  timeout: 10000,
});

export default api;