const { getPlayerStats } = require('../services/skout-service');

module.exports = async (req, res) => {
    let playerId = req.params.id;
    let stats = await getPlayerStats(playerId);
    let status = stats.id ? 200 : 400;
    res.status(status).json(stats);
};