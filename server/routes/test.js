const express = require('express');
const HRate = require('../models/HRate');
const importHealthJSON = require('../JSONprocessing/importHealthJSON');

const dir = 'C:\\Users\\19116304\\Shealth\\test\\';
const HRateRouter = new express.Router();

// const ratesArray = [];
async function test() {
    try {
        const data = await importHealthJSON(dir)
        console.log(data)
        return await data.map(obj => {
            return HRate.create(obj)
        })
    } catch (e) {
        console.log(e)
    }
}

console.log('HELLO')
console.log(test())
console.log('BYE')

// console.log(data)
