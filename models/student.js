const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    surname: String,
    stdNumber: Number,
    grades: [{
        code: String,
        value: Number
    }]
});

module.exports = mongoose.model('Student', studentSchema);