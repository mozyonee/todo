import { ElectronAPI } from '@electron-toolkit/preload';

export interface TaskProps {
	id: string;
	header: string;
	description: string;
	status: 'done' | 'undone';
	createdAt?: string;
}

declare global {
	interface Window {
		electron: ElectronAPI;
		api: {
			getTasks: (text: string, status: string) => Promise<TaskProps[]>;
			createTask: () => Promise<TaskProps>;
			updateTask: (id: string, data: { header?: string, description?: string, status?: string; }) => Promise<TaskProps>;
			deleteTask: (id: string) => Promise<any>;
		};
	}
}

export { };
