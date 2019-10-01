const Segment = require('../database/models/segment');

module.exports = async (req, res) => {

    let handleResponse = data => {
        return res.json(data);
    };

    await Segment.find({}, {value: 1, displayValue: 1, _id: 0})
        .then(handleResponse)
        .catch(handleResponse);

};
