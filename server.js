const express = require('express')
const app = express()
const port = process.env.PORT || 7000
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const User = require('./Server/Models/UserDataModel')
const data = require('./src/data')
const routes = require('./Server/Routes/routes')

app.use(express.static(path.join(__dirname, 'src')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/CRM', { useNewUrlParser: true })


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use('/', routes)
//script to import users to DB
const saveUser = () => {
    for (let i of data) {
        let newUser = new User(i)
        newUser.save()
    }
}
// saveUser()


app.listen(port, function () {
    console.log(`Port ${port} is running`)
})