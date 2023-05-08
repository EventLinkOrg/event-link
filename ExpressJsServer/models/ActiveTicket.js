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
        title: {
            type: String,
            required: true
        },
        datePurchased: {
            type: Date,
            required: true,
            default: Date.now
        },
        // textContent: {
        //     type: String,
        //     required: true,
        // },
        userId: {
            type: String
        },  
        ticketPrice: {
            type: Number,
            required: true
          },
        img:
        {
            name: String,
            data: Buffer,
            contentType: String
        }
    }, {
    collection: 'Tickets'
}
)



module.exports = mongoose.model('Ticket', ticketSchema);

