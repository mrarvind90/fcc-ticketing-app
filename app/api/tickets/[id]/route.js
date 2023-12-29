import Ticket from '@/app/(models)/ticket';
import { NextResponse } from 'next/server';
import * as http2 from 'http2';

export async function GET(req, { params }) {
	try {
		const { id } = params;
		const foundTicket = await Ticket.findOne({ _id: id });

		return NextResponse.json({ foundTicket }, { status: http2.constants.HTTP_STATUS_OK });
	} catch (err) {
		return NextResponse.json(
			{
				message: 'Unable to delete the ticket',
				err,
			},
			{ status: http2.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR },
		);
	}
}

export async function PUT(req, { params }) {
	try {
		const { id } = params;
		const body = await req.json();
		const ticketData = body.formData;

		const updateTicketData = await Ticket.findByIdAndUpdate(id, {
			...ticketData,
		});

		return NextResponse.json(
			{ message: 'Successfully updated ticket', updateTicketData },
			{ status: http2.constants.HTTP_STATUS_OK },
		);
	} catch (err) {
		return NextResponse.json(
			{
				message: 'Unable to delete the ticket',
				err,
			},
			{ status: http2.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR },
		);
	}
}

export async function DELETE(req, { params }) {
	try {
		const { id } = params;
		await Ticket.findByIdAndDelete(id);

		return NextResponse.json(
			{ message: 'Successfully deleted ticket' },
			{ status: http2.constants.HTTP_STATUS_OK },
		);
	} catch (err) {
		return NextResponse.json(
			{
				message: 'Unable to delete the ticket',
				err,
			},
			{ status: http2.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR },
		);
	}
}
