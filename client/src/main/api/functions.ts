import api from "./helper";
import { ipcMain } from "electron";

const registerIpcHandlers = () => {
	ipcMain.handle('get-tasks', async (_event, query, status) => {
		const link = '/tasks?' + (query && `&query=${query}`) + (status && `&status=${status}`);
		console.log(link);
		const response = await api.get(link);
		return response.data;
	});
	ipcMain.handle('create-task', async () => {
		const response = await api.post('/tasks');
		return response.data;
	});
	ipcMain.handle('update-task', async (_event, id, data) => {
		const response = await api.patch(`/tasks/${id}`, data);
		return response.data;
	});
	ipcMain.handle('delete-task', async (_event, id) => {
		const response = await api.delete(`/tasks/${id}`);
		return response.data;
	});
};

export default registerIpcHandlers;