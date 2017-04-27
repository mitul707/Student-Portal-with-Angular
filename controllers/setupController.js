var student_model = require('../models/studentModel');

module.exports = function(app) {
    app.get('/get/students', function(req, res) {
        
        var students = [
            {
                CWID : 707,
                first_name: "Mitul",
                last_name: "Trivedi",
                email: "mt@gmail.com",
                number : "123456"

            },
            {
                CWID : 123,
                first_name: "Deep",
                last_name: "Mehta",
                email: "dm@gmail.com",
                number : "123456"
            },
            {
                CWID : 101,
                first_name: "Harsh",
                last_name: "Dodiya",
                email: "hd@gmail.com",
                number : "123456"
            },
            {
                CWID : 505,
                first_name: "Jay",
                last_name: "Trivedi",
                email: "jt@gmail.com",
                number : "5656656"
            },
            {
                CWID : 1010,
                first_name: "Rahul",
                last_name: "Rajput",
                email: "rj@gmail.com",
                number : "3434"
            }
        ]

        /*student_model.create(students, function(err, result) {
            res.send(result);
        })*/
    })
}