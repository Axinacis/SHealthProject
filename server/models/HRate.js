const mongoose = require('mongoose');

const HRateSchema = new mongoose.Schema({
    end_time: {type: Date},
    heart_rate: String,
    heart_rate_max: String,
    heart_rate_min: String,
    start_time: {type: Date}
});

module.exports = mongoose.model('HRate', HRateSchema)