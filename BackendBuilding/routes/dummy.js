const mongoose = require('mongoose');
const Dummy = require('../models/Dummy');
const route = require('express').Router()

route.get('/', async (req, res) => {
    res.send('hello dummy')
})

route.post('/post', async (req, res) => {
    try{
        console.log(req.body)
        // const newDummy = new Dummy()
        // const result = await newDummy.save();
        // res.status(200).send(result);
    }catch(err){
        console.log(err.message)
    }
});


module.exports = route