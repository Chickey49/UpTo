const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connection = mongoose.connection; 
const express = require('express');
const userRoutes = express.Router();
const app = express(); 
const PORT = 3000;
let user = require('./components/userSchema');

app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/usersdb', { useNewUrlParser: true });

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
    }); 

connection.once('open', function() {
console.log("MongoDB database connection established successfully");
    userRoutes.route('/').get(function(req, res) {
        user.find(function(err, user) {
            if (err) {
                console.log(err);
            } else {
                res.json(user);
            }
        });
    })
}) 