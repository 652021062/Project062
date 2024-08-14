const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String ,required: true},
    password: {type: String , required: true},
    firstname :{ type: String ,required: false},
    lastname : {type: String , required:false},
    StudentID : {type: String , required:false},
    Faculty : {type: String , required:false},
    Fieldofstudy : {type: String , required:false},
});

module.exports = mongoose.model('User', userSchema);