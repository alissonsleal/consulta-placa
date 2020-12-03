import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apicarros.com/v1/consulta',
});

export default api;
