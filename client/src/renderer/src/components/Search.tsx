import { Select, Option } from '@mui/joy';

interface SearchProps {
	query: string;
	status: string;
	setQuery: (query: string) => void;
	setStatus: (status: any) => void;
}

export default function Search({ query, setQuery, status, setStatus }: SearchProps): JSX.Element {

	const normalcolor = status === 'done' ? '#05df72' : status === 'undone' ? '#ff6467' : '#fff';
	const hoverColor = status === 'done' ? '#00c951' : status === 'undone' ? '#fb2c36' : '#f1f1f1';
	const textColor = status ? '#fff' : '#000';

	return (
		<nav className="flex gap-5">
			<input
				placeholder="Query"
				className="rounded-xl focus-visible:outline-none border-black border-2 p-4 flex-grow"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>

			<Select
				value={status}
				onChange={(_, newValue) => setStatus(newValue ?? '')}
				placeholder="Status"
				sx={{
					bgcolor: normalcolor,
					color: textColor,
					borderColor: '#000',
					borderWidth: '2px',
					borderRadius: '12px',
					'&:hover': { bgcolor: hoverColor },
					'& .MuiSelect-indicator': { color: textColor },
				}}
				slotProps={{
					indicator: {
						sx: { color: textColor },
					},
				}}
			>
				<Option value="">All</Option> {/* This is the "deselect" option */}
				<Option value="done">Done</Option>
				<Option value="undone">Undone</Option>
			</Select>


			<button className="rounded-xl border-2 border-black text-black px-4 py-2 cursor-pointer hover:bg-neutral-300">
				Search
			</button>
		</nav>
	);
}
