const { getFortnite } = require('../services/scout-configurator');

module.exports = async (req, res) => {
    let fortnite = await getFortnite('fortnite');
    let status = fortnite.id ? 200 : 500;
    return res.status(status).json(fortnite);
};
