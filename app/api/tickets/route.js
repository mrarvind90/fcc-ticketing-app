import Ticket from '@/app/(models)/ticket';
import { NextResponse } from 'next/server';
import * as http2 from 'http2';
import TicketCard from '@/app/(components)/TicketCard';

export async function POST(req) {
	try {
		const body = await req.json();
		const ticketData = body.formData;
		await Ticket.create(ticketData);

		return NextResponse.json({ message: 'Ticket Created' }, { status: http2.constants.HTTP_STATUS_CREATED });
	} catch (err) {
		return NextResponse.json(
			{
				error: 'Bad Request',
				message: 'Unable to create ticket',
				err,
			},
			{ status: http2.constants.HTTP_STATUS_BAD_REQUEST },
		);
	}
}

export async function GET() {
	try {
		const tickets = await Ticket.find();

		return NextResponse.json({ tickets }, { status: http2.constants.HTTP_STATUS_OK });
	} catch (err) {
		return NextResponse.json(
			{
				error: 'Bad Request',
				message: 'Unable to fetch tickets',
				err,
			},
			{ status: http2.constants.HTTP_STATUS_BAD_REQUEST },
		);
	}
}
