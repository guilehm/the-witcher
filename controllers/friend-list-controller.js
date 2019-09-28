const Friend = require('../database/models/friend');

module.exports = async (req, res) => {

    let handleResponse = data => {
        return res.json(data);
    };

    await Friend.find({})
        .then(handleResponse)
        .catch(handleResponse);

};
