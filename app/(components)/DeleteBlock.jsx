'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import logger from '@/app/(config)/logger';

const DeleteBlock = ({ id }) => {
	const router = useRouter();

	const deleteTicket = async () => {
		try {
			const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
				method: 'DELETE',
			});

			router.refresh();
		} catch (error) {
			logger.error(`Error: "${error}"`);
		}
	};

	return (
		<FontAwesomeIcon
			icon={faX}
			className="text-red-400 hover:cursor-pointer hover:text-red-200"
			onClick={deleteTicket}
		/>
	);
};

export default DeleteBlock;
