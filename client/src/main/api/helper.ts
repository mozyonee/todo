import axios from 'axios';
import dotenv from 'dotenv';
import { app } from 'electron';
import path from 'path';

const envPath = app.isPackaged
	? path.join(process.resourcesPath, '.env')
	: path.join(process.cwd(), '.env');

dotenv.config({ path: envPath });

const api = axios.create({
	baseURL: process.env.SERVER_URL
});

export default api;