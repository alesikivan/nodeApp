const {Schema, model} = require('mongoose');

// schema of table
const course = new Schema({
    // field creating
    state : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
});

module.exports = model('Course', course);
