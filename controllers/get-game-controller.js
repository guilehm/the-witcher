const { getFortnite } = require('../services/skout-service');


module.exports = async (req, res) => {
    let fortnite = await getFortnite();
    return res.json({success: true, fortnite});
};