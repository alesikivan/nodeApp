const {Schema, model} = require('mongoose');

// schema of table
const time = new Schema({
    // field creating
    hours : {
        type : Number,
        required : true
    },
    minutes : {
        type : Number,
        required : true
    },
    developer : {
        type : String,
        required : true
    },
    date_create : {
        type : Date,
        required : true
    },
    userId: {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
});

module.exports = model('Time', time);
