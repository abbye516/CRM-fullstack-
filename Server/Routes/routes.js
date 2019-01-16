const express = require('express')
const router = express.Router()
const User = require('../Models/UserDataModel')

//get clients
router.get('/clients', (req, res) => {
    User.find({}, function (err, client) {
        res.send(client)
    });
})

//actions
router.get('/actions', (req, res) => {
    User.find({}, 'name owner emailType', function (err, response) {
        res.send(response)
    });
})
//analytics
router.get('/analytics', (req, res) => {
    User.find({},  function (err, client) {
        res.send(client)
    });
})

//update client's data
router.put('/clients/:clientId', (req, res) => {
    let client = req.params.clientId
    User.findByIdAndUpdate(client, {
        name: `${req.body.name}  ${req.body.surname}`,
        country: req.body.country
    },
        { new: true }, 
        function (err, res) {
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
router.put('/actions/:client', (req, res) => {
    let client = req.params.client
    let value = Object.keys(req.body)
    console.log(value[0])
    User.findOneAndUpdate({ name: client },
        {
            $set:
            {
                [value[0]]: req.body[value],
            }
        }, { new: true },
        function (err, doc) {
            console.log(doc)
        });
    res.end()
})


module.exports = router
