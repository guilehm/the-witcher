const { getPlayerStats } = require('../services/scout-service');
const { saveMetadata, saveSegment } = require('../utils/utils');

module.exports = async (req, res) => {
    let playerId = req.params[0];
    let stats = await getPlayerStats(playerId);
    let status = stats.id ? 200 : 400;
    res.status(status).json(stats);

    // save this for metadata and segment endpoints
    if (status === 200) {
        saveMetadata(stats);
        saveSegment(stats);
    }
};
