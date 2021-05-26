import axios from 'axios';

const api = axios.create({
    withCredentials: false,
    baseURL:'http://localhost:8080/api/v1/',
    auth: {
        username: 'admin',
        password: 'admin'
      }
})

export default api;