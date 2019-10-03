const { findPlayers } = require('../services/scout-service');

module.exports = async (req, res) => {
    let name = req.params.name;
    let players = await findPlayers(name);
    let status = players.results ? 200 : 500;
    return res.status(status).json(players.results);
};