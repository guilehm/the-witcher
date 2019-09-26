const Friend = require('../database/models/friend');

module.exports = async (req, res) => {

    let handleError = err => {
        return res.json(err);
    };

    let handleSuccess = friends => {
        return res.json(friends);
    };

    await Friend.find({})
        .then(handleSuccess, handleError)
        .catch(handleError);

};