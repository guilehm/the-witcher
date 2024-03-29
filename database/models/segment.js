const mongoose = require('mongoose');

const SegmentSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
        unique: true,
    },
    displayValue: {
        type: String,
        required: false,
        unique: false,
    },
});

const Segment = mongoose.model('Segment', SegmentSchema);

module.exports = Segment;
