const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Transaksioni = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        llogaria_ID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Llogaria',
            required: true
        }
    }, {
    collection: 'TransaksioniSh'
}
)



module.exports = mongoose.model('Transaksioni', Transaksioni);

