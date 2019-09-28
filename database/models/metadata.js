const mongoose = require('mongoose');

const MetadataSchema = new mongoose.Schema({
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
});

const Metadata = mongoose.model('Metadata', MetadataSchema);

module.exports = Metadata;
