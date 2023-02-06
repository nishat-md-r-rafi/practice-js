const mongoose = require('mongoose')
const route = require('express').Router()

route.get('/', async (req, res) => {
    res.json('hello dummy')
})


module.exports = route