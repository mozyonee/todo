import { useState, useEffect } from "react";
import Task from "./components/Task";
import { TaskProps } from "./types/task";
import Search from "./components/Search";

function App(): JSX.Element {
	const [tasks, setTasks] = useState<TaskProps[]>([]);
	const [query, setQuery] = useState('');
	const [status, setStatus] = useState<'done' | 'undone' | ''>('');
	const [error, setError] = useState('');

	useEffect(() => {
		window.api.getTasks(query, status ?? '')
			.then((results) => {
				setTasks(results);
				setError('');
			})
			.catch(err => {
				console.error('Error fetching tasks:', err);
				setError('Failed to fetch tasks. Please check server connection.');
			});
	}, [query, status]);

	const handleCreate = () => {
		window.api.createTask().then((createdTask) => {
			setTasks((prevTasks) => [...prevTasks, createdTask]);
			console.log("Created task:", createdTask);
		});
	};

	const handleDelete = (id: string) => {
		setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
	};

	return (
		<main className="p-20 flex flex-col gap-5">
			<Search query={query} setQuery={setQuery} status={status} setStatus={setStatus} />
			<button className="rounded-xl border-2 border-black text-black px-4 py-2 cursor-pointer hover:bg-neutral-300" onClick={handleCreate} >
				Create
			</button>
			{error && <div className="text-red-500 p-2 border border-red-300 rounded">{error}</div>}
			{
				[...tasks].sort((a, b) => {
					const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
					const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
					return dateB - dateA;
				})
					.map((task: TaskProps) => {
						return (
							<Task
								key={task.id}
								data={{
									id: task.id,
									header: task.header,
									description: task.description,
									status: task.status,
									createdAt: task.createdAt,
								}}
								onDelete={handleDelete}
								query={query}
								searchStatus={status}
								setTasks={setTasks}
							/>
						);
					})
			}
		</main>
	);
}

export default App;
