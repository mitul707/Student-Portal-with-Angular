var studentmodel = require('../models/studentModel');
var bodyParser = require('body-parser');


module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


    var students = [
        {
            CWID : 707,
            first_name: "Mitul",
            last_name: "Trivedi",
            email: "mt@gmail.com",
            number : "123456"

        },
        {
            CWID : 774,
            first_name: "Mark",
            last_name: "Dinan",
            email: "md@gmail.com",
            number : "788745"
        },
        {
            CWID : 662,
            first_name: "Chris",
            last_name: "Rogers",
            email: "cr@gmail.com",
            number : "5452123"
        },
        {
            CWID : 784,
            first_name: "Victor",
            last_name: "Lue",
            email: "vl@gmail.com",
            number : "544121"
        },
        {
            CWID : 212,
            first_name: "Mark",
            last_name: "Henry",
            email: "mh@gmail.com",
            number : "42124"
        },
        {
            CWID : 878,
            first_name: "Sal",
            last_name: "Lisanti",
            email: "sl@gmail.com",
            number : "54121"
        },
        {
            CWID : 123,
            first_name: "Deep",
            last_name: "Mehta",
            email: "dm@gmail.com",
            number : "44512"
        },
        {
            CWID : 101,
            first_name: "Harsh",
            last_name: "Dodiya",
            email: "hd@gmail.com",
            number : "31287"
        },
        {
            CWID : 505,
            first_name: "Jay",
            last_name: "Trivedi",
            email: "jt@gmail.com",
            number : "899741"
        },
        {
            CWID : 159,
            first_name: "Priyank",
            last_name: "Shah",
            email: "ps@gmail.com",
            number : "788547"
        },
        {
            CWID : 885,
            first_name: "Ruchit",
            last_name: "Shah",
            email: "rs@gmail.com",
            number : "7815"
        },
        {
            CWID : 212,
            first_name: "Nick",
            last_name: "Johnson",
            email: "nj@gmail.com",
            number : "212113"
        },        
        {
            CWID : 545,
            first_name: "Chris",
            last_name: "Rabada",
            email: "cr@gmail.com",
            number : "454212"
        },
        {
            CWID : 887,
            first_name: "Dirk",
            last_name: "Nanis",
            email: "dn@gmail.com",
            number : "2121"
        },
        {
            CWID : 211,
            first_name: "Justine",
            last_name: "Hue",
            email: "jh@gmail.com",
            number : "42125"
        },
        {
            CWID : 871,
            first_name: "Lisa",
            last_name: "Poish",
            email: "lp@gmail.com",
            number : "321234"
        }
    ];

    app.get('/get/students', function(req, res) {
        res.send(students);
    })

    app.get('/get/student/:cwid', function(req, res) {
        var arr = [];     
        arr.push(students.find(getStudent));
        res.send(arr);

        function getStudent(item) {
            return item.CWID == req.params.cwid;
        }
    })

    

    /*app.post('/add/student', function(req, res) {
        var row = {
            CWID : req.body.cw_id,
            first_name : req.body.firstname,
            last_name : req.body.lastname,
            contact : req.body.contact
        }
        studentmodel.create(row, function(err, result) {
            if(err) throw err;
            res.send('Inserted');
        })
    })

    app.post('/update/student', function(req, res) {
        var row = {
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            contact: req.body.contact
        }
        studentmodel.update({CWID: req.body.cw_id }, row, function(err, result) {
            if(err) throw err;
            res.send('Updated');
        })
    })*/
}