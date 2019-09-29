const { getPlayerStats } = require('../services/skout-service');
const Metadata = require('../database/models/metadata');

module.exports = async (req, res) => {
    let playerId = req.params[0];
    let stats = await getPlayerStats(playerId);
    let status = stats.id ? 200 : 400;
    res.status(status).json(stats);

    // save this for metadata endpoint
    if (status === 200) {
        let metadatas = stats.stats.map(data => data['metadata'])
        metadatas.forEach(data => {
            Metadata.findOneAndUpdate({ key: data.key }, data, { upsert: true })
                .then(m => console.log(m))
                .catch(e => console.log(e))
        })
    }
};