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
    }
});

module.exports = model('Time', time);
