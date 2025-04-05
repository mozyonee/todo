
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = axios.create({
	baseURL: process.env.SERVER_URL
});

export default api;
