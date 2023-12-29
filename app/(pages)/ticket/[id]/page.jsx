import TicketForm from '@/app/(components)/TicketForm';

const getTicketById = async (id) => {
	const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
		cache: 'no-store',
	});

	if (!res.ok) {
		throw new Error(`Failed to get ticket with ID: ${id}`);
	}

	return res.json();
};

const TicketPage = async ({ params }) => {
	const EDIT_MODE = params.id !== 'new';
	let updateTicketData;

	if (EDIT_MODE) {
		updateTicketData = await getTicketById(params.id);
		updateTicketData = updateTicketData.foundTicket;
	} else {
		updateTicketData = {
			_id: 'new',
		};
	}

	return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
