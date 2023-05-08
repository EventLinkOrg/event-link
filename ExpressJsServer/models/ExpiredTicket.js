const mongoose = require('mongoose');
const Category = require('./Category');
const event = require('./Event');
const Schema = mongoose.Schema;

const ticketSchema = new Schema(
    {
        title: {
            type: String
        },
        datePurchased: {
            type: Date
        },
        event:{
            type: Event
        },
        textContent: {
            type: String
        },
        category: {
            type: Category
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
    collection: 'Tickets'
}
)



module.exports = mongoose.model('Ticket', ticketSchema);

