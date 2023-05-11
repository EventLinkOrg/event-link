const mongoose = require('mongoose');
const Category = require('./Category');
const event = require('./Event');
const Schema = mongoose.Schema;

const expiredTicketSchema = new Schema(
    {
        eventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
            required: true
          },
        title: {
            type: String
        },
        datePurchased: {
            type: Date
        },
       
        textContent: {
            type: String
        },
    
        userId:{
            type: String
        },
        img:
        {
            name: String,
            data: Buffer,
            contentType: String
        }
    }, {
    collection: 'ExpiredTickets'
}
)



module.exports = mongoose.model('ExpiredTicket', expiredTicketSchema);

