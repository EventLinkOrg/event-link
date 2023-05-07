const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstname: {
            type: String,
           required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
           required:true
        },
        password:{
            type:String,
           required:true
        },
        is_admin:{
            type:String,
            required:true
        },
        token:{
            type:String,
            default:""
        }
    }, {
    collection: 'Users'
}
)
module.exports = mongoose.model('User', userSchema);

