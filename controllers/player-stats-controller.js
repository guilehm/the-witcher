const { getPlayerStats } = require('../services/skout-service');
const Metadata = require('../database/models/metadata');

module.exports = async (req, res) => {
    let playerId = req.params[0];
    let stats = await getPlayerStats(playerId);
    let status = stats.id ? 200 : 400;
    res.status(status).json(stats);

    // save this for metadata endpoint
    if (status === 200) {
        Metadata.collection.drop()
        let metadatas = stats.stats.map(data => data['metadata'])
        Metadata.collection.insert(metadatas)
    }
};