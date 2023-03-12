const mongoose = require('mongoose');
const Dummy = require('../models/Dummy');
const route = require('express').Router()

route.get('/', async (req, res) => {
    res.send('hello dummy')
})

route.post('/post', async (req, res) => {
    try{
        const newDummy = new Dummy(req.body)
        // console.log(newDummy)
        const result = await newDummy.save();
        res.status(200).send(result);
    }catch(err){
        console.log(err.message)
    }
});


module.exports = route