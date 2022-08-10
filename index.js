var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

//serve static files
app.use(express.static('public'));
app.use(cors());

//create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(req.params.name, req.params.email, req.params.password).then((user) => {
        console.log(user);
        res.send(user);
    });
});

//login
app.get('/account/login/:email/:password', function (req, res) {
    dal.findOne(req.params.email, req.params.password).then((user) => {
        console.log(user)
        res.send(user);
    });
});

//update
app.get('/account/update/:email/:amount', function (req,res) {
    dal.update(req.params.email, Number(req.params.amount)).then((user) => {
        console.log(user)
        res.send(user);
    });
});

//balance
app.get('/account/balance/:email', function (req,res) {
    dal.login(req.params.email).then((user) => {
        console.log(user);
        res.send(user);
    })
});

//all accounts
app.get('/account/all', function (req, res) {
    dal.all().then((docs) => {
        console.log(docs);
        res.send(docs);
    });
});

var port = 3000;
app.listen(port);
console.log('Running on port: ' +port);