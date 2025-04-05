import { useState } from "react";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { TaskProps } from '../types/task';

interface TaskArguments {
	data: TaskProps;
	onDelete: (id: string) => void;
	query: string;
	searchStatus: string;
	setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

export default function Task({ data, onDelete, query, searchStatus, setTasks }: TaskArguments): JSX.Element {
	const [status, setStatus] = useState<'done' | 'undone'>(data.status);
	const [header, setHeader] = useState(data.header);
	const [description, setDescription] = useState(data.description);
	const [isEditing, setIsEditing] = useState(false);

	const normalcolor = status === 'done' ? '#05df72' : '#ff6467';
	const hoverColor = status === 'done' ? '#00c951' : '#fb2c36';

	const handleEditToggle = () => {
		if (isEditing) {
			window.api.updateTask(data.id, { header, description, status }).then(() => {
				window.api.getTasks(query, searchStatus ?? '').then((results) => { setTasks(results); });
			});
		}
		setIsEditing(prev => !prev);
	};

	const handleDelete = () => {
		window.api.deleteTask(data.id).then(() => onDelete(data.id));
	};

	return (
		<div className="border-2 border-black rounded-xl p-5">
			<div>
				{isEditing ? (
					<>
						<input
							type="text"
							className="text-2xl font-black mb-2 w-full border-b-2 focus:outline-none"
							value={header}
							onChange={(e) => setHeader(e.target.value)}
						/>
						<textarea
							className="w-full border-b-2 focus:outline-none"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</>
				) : (
					<>
						<h2 className="text-2xl font-black">{header}</h2>
						<p>{description}</p>
					</>
				)}
			</div>

			<div className="flex gap-3 w-full justify-end mt-4">
				{isEditing ? (
					<Select
						value={status}
						onChange={(_, newValue) => newValue && setStatus(newValue)}
						sx={{
							bgcolor: normalcolor,
							color: '#fff',
							'&:hover': { bgcolor: hoverColor },
							'& .MuiSelect-indicator': { color: '#fff' }
						}}
						slotProps={{
							indicator: {
								sx: { color: '#fff' }
							}
						}}
					>
						<Option value="done">Done</Option>
						<Option value="undone">Undone</Option>
					</Select>
				) :
					(<div className={`bg-${status === 'done' ? 'green' : 'red'}-400 px-4 py-2 rounded text-white`}>{status === 'done' ? 'Done' : 'Undone'}</div>)
				}

				<button onClick={handleEditToggle}
					className="bg-orange-400 px-4 py-2 rounded text-white cursor-pointer hover:bg-orange-500">
					{isEditing ? 'Save' : 'Edit'}
				</button>

				<button className="bg-red-400 px-4 py-2 rounded text-white cursor-pointer hover:bg-red-500" onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
}