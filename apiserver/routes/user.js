
const express = require('express');
const router = new express.Router()
const User = require('../models/userModel')
const mymethod = require('../methods')

router.post('/register', async (req, res) => {
    var user = new User(req.body);
    User.find({"username": "reddsddgie"}, function(err, doc){
        console.log(doc)
        if(doc.length == 0){
            console.log("empty")
        }
    })
    // try {
    //     mymethod.saveToDB(user)
    // }catch(err){
    //     console.log("said error ==== "+err)
    // }

    //console.log(saved, "vs", get)
    res.status(200).send(user);
});

router.post('/login', (req, res) => {
    res.status(200).send({ access_token: '' });
});


module.exports = router