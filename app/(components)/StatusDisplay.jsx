const StatusDisplay = ({ status }) => {
	const getStatusColor = (status) => {
		const statusColorMap = {
			'done': 'bg-green-200',
			'started': 'bg-yellow-200',
			'not started': 'bg-slate-700',
		};

		return statusColorMap[status.toLowerCase()];
	};

	return (
		<span
			className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getStatusColor(
				status,
			)}`}
		>
			{status}
		</span>
	);
};

export default StatusDisplay;
