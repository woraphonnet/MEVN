var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    firstname:  String, // String is shorthand for {type: String}
    lastname: String,
    birthday: String,
    age: Number,
    history_working: {
        company_name:String,
        address:String,
        tel:String,
        position:String,
    },
    history_education: {
        school_name: String,
        start_year:  Number,
        end_year:  Number,
        grade:  Number,
    }
});

module.exports = mongoose.model('Employee',employeeSchema)