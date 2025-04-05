import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
	getTasks: async (query?: string, status?: string) => {
		return await ipcRenderer.invoke('get-tasks', query, status);
	},
	createTask: async () => {
		return await ipcRenderer.invoke('create-task');
	},
	updateTask: async (id: string, data: { header: string, description: string, status: string; }) => {
		return await ipcRenderer.invoke('update-task', id, data);
	},
	deleteTask: async (id: string) => {
		return await ipcRenderer.invoke('delete-task', id);
	}
});