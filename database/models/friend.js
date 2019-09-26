const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
    playerId: {
        type: String,
        required: true,
        unique: true,
    },
    handle: {
        type: String,
        required: true,
        unique: true,
    },
});

const Friend = mongoose.model('Friend', FriendSchema);

module.exports = Friend;
