const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = require("./Category")

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required:true
        },
        dateAdded: {
            type: Date,
            required:true
        },
        startDate: {
            type: Date,
            required:true

        },
        duration:{
            type: Number,
            required:true
        },
        tickets:{
            type: Number,
            required:true
        },
        textContent: {
            type: String,
            required:true
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
          },
          userId:{
            type: String,
            required:true
          },
        img:
        {
            name: String,
            data: Buffer,
            contentType: String
        }
    }, {
    collection: 'Events'
}
)



module.exports = mongoose.model('Event', eventSchema);

