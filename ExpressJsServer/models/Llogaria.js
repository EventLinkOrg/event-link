const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Llogaria = new Schema(
    {
        name: { type: String, required: true },
    }, {
    collection: 'LlogariaSh'
}
)



module.exports = mongoose.model('LlogariaSh', Llogaria);

