import mongoose, { Schema } from 'mongoose';
import logger from '@/app/(config)/logger';

mongoose
	.connect(process.env.MONGODB_ATLAS_URI)
	.then(() => {
		logger.info('Connected to MongoDB');
	})
	.catch((error) => {
		logger.error(`Error: "${error}" encountered when attempting to connect to MongoDB"`);
	});

mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
	{
		title: String,
		description: String,
		category: String,
		priority: Number,
		progress: Number,
		status: String,
		active: Boolean,
	},
	{
		timestamps: true,
	},
);

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

export default Ticket;
