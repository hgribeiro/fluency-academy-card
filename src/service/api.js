import axios from 'axios';

const api = axios.create({
  baseURL: 'http://hackit.app',
});

export default api
