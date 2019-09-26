const Friend = require('../database/models/friend');

module.exports = async (req, res) => {

    let handleResponse = err => {
        return res.json(err);
    };

    await Friend.find({})
        .then(handleResponse)
        .catch(handleResponse);

};
