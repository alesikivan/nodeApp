const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    time : {
        item : [
            {
                timeId : {
                    type : Schema.Types.ObjectId,
                    ref : 'Time',
                    required : true
                }
            }
        ]
    }
});

// model function register "User" model with user "userSchema" schema
module.exports = model('User', userSchema);
