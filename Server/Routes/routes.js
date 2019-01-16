const express = require('express')
const router = express.Router()
const User = require('../Models/UserDataModel')


router.get('/clients', (req, res) => {
    User.find({}, function (err, client) {
        res.send(client)
    });
})

//update client's data
router.put('/clients:client', (req, res) => {
    let client = req.params.client
    User.findByIdAndUpdate(client._id, {
        name: client.name,
        country: client.country
    }, function (err, res) {
        console.log(res)
    })
    res.end()
})


//add new clients
router.post('/actions', async function (req, res) {
    let newUser = await new User(req.body)
    newUser.save()
    res.end()
});

//update client in actions page
router.put('/actions:client', (req, res) => {
    let client = req.params.client
    User.findOneAndUpdate(client._id, {
        name: client.name,
        emailType: client.emailType,
        sold: client.sold
    }, function (err, res) {
        console.log(res)
    })
    res.end()
})


module.exports = router
