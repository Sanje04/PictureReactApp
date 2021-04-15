import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bXgkLyDDm16GK6hUFGDdKVHlXfl7CySvgdbjJ_LCJ7Q'
    }
});