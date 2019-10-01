const mongoose = require('mongoose');

const SegmentSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    value: {
        type: String,
        required: true,
        unique: false,
    },
    displayValue: {
        type: String,
        required: false,
        unique: false,
    },
});

const Segment = mongoose.model('Segment', SegmentSchema);

module.exports = Segment;
