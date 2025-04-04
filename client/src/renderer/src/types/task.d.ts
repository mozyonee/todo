export interface TaskProps {
	id: string;
	header: string;
	description: string;
	status: 'done' | 'undone';
	createdAt?: string;
}