const mongoose = require('mongoose');
const Category = require('./Category');
const event = require('./Event');
const Schema = mongoose.Schema;

const ticketSchema = new Schema(
    {
        eventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
            required: true
        },
        datePurchased: {
            type: Date,
            required: true,
            default: Date.now
        },
        userId: {
            type: String
        },
        ticketPrice: {
            type: Number,
            required: true
        },
    }, {
    collection: 'Tickets'
}
)



module.exports = mongoose.model('Ticket', ticketSchema);

