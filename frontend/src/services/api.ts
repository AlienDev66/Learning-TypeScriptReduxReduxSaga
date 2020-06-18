import axios from 'axios';

/**
 * Create an Axios api with defaults
 */
const api = axios.create({
    baseURL: 'https://api.github.com',
});

export default api;