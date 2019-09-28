const Metadata = require('../database/models/metadata');

module.exports = async (req, res) => {

    let handleResponse = data => {
        return res.json(data);
    };

    await Metadata.find({})
        .then(handleResponse)
        .catch(handleResponse);

};
