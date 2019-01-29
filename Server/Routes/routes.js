const express = require('express')
const router = express.Router()
const User = require('../Models/UserDataModel')
const analyticsCalc = require ('../Scripts/analyticCalcs')
//badgeFunc.<nameOfFunc> 

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
// router.get('/analytics', (req, res) => {
//     let _countCountryHC = badgeFunc.getSoldCountries;
//     let hottestCountry = badgeFunc.hotCountry;
//     User.find({}, function (err, client) {
//         res.send(client)
//     });
// })

/////testing:
router.get('/analytics', async (req, res) => {
    let data = await User.find({});
    let hottestCountry = analyticsCalc.hotCountry(data);
    let totalEmailsSent = analyticsCalc.emailsSent(data)
    let outstandingClients = analyticsCalc.outstandingClients(data)
    let topEmployeesChart = analyticsCalc.topEmployeesChart(data)
    let allBadgeAnalytics = {
        hottestCountry: hottestCountry,
        emailsSent: totalEmailsSent,
        outstandingClients: outstandingClients,
        topEmployeesChart: topEmployeesChart
     }
    res.send(allBadgeAnalytics)

})


//update client's data
router.put('/clients/:clientId', (req, res) => {
    let client = req.params.clientId
    console.log(req.body)
    User.findByIdAndUpdate(client, {
        name: `${req.body.name} ${req.body.surname}`,
        country: req.body.country
    },
        { new: true },
        function (err, res) {
            console.log(res)
        })
    res.end()
})

//add new clients from action page
router.post('/actions', async function (req, res) {
    console.log(req.body)
    let newUser = await new User(req.body)
    newUser.save()
    res.end()
});

//update client in actions page
router.put('/actions/:client', (req, res) => {
    let client = req.params.client
    console.log(client)
    let value = Object.keys(req.body)
    console.log(`value : ${value[0]}`)
    User.findOneAndUpdate({ name: client },
        {
            $set:
            {
                [value[0]]: req.body[value]
            }
        }, { new: true },
        function (err, doc) {
            console.log(`hello ${doc}`)
        });
    res.end()
})


module.exports = router
