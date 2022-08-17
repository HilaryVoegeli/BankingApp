const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;

//connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
    console.log('Connected to db server');
    //connect to myproject database
    db = client.db('myproject');
});

//create user account
function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0, loggedin: false};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    });
};

//login
function login(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOne({email: email})
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
            });
        };

function log(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdate({email: email},{$set: {loggedin: true}})
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
            });
};

function logO(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdate({email: email},{$set: {loggedin: false}})
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
            });
};
// find 1 user
function findOne() {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOne({loggedin: true})
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
    });
};

//update
function update(email, amount) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdate(
                {email: email},
                {$set: {balance: amount}},
                {returnOriginal: false},
                function (err, docs) {
                    err ? reject(err) : resolve(docs)
                });
    });
};

//all users
function all () {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
            });
    });
};

module.exports = {create, login, log, logO, findOne, update, all};