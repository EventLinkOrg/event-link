const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        textContent: {
            type: String,
           required: true
        },

    }, {
    collection: 'Categories'
}
)



module.exports = mongoose.model('Category', categorySchema);

