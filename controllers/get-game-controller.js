const { getFortnite } = require('../services/skout-service');

module.exports = async (req, res) => {
    let fortnite = await getFortnite('fortnite');
    return res.json({success: true, fortnite});
};