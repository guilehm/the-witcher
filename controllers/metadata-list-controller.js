const Metadata = require('../database/models/metadata');

module.exports = async (req, res) => {

    let handleResponse = data => {
        return res.json(data);
    };

    await Metadata.find({}, {key: 1, name: 1, _id: 0})
        .then(handleResponse)
        .catch(handleResponse);

};
