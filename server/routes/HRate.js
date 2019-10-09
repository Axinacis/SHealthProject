const express = require('express');
const HRate = require('../models/HRate');

// const dir = 'C:\\Users\\19116304\\Shealth\\test\\';
const HRateRouter = new express.Router();

HRateRouter.post('/', async (req, res) => {
    try {
        const models = await HRate.create(req.body);
        // await models.save();
        res.status(201).send(models)
    } catch (e) {
        res.status(400).send(e)
    }
});

HRateRouter.post('/upload', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file to upload'
            })
        }
    } catch (e) {
        res.status(500).send(e)
    }
});

module.exports = HRateRouter;