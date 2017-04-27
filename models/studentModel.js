var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentSchema =  new Schema ({
    CWID : Number,
    first_name: String,
    last_name: String,
    email:String,
    number:String
});

var studentModel = mongoose.model('Students', studentSchema);

module.exports = studentModel;