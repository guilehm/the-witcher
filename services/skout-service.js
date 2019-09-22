const { fortnite, Scout } = require('./skout-configurator');

async function findPlayers(name, platform = null, comprehensive = true, exact = true) {
    let players = await Scout.players.search(
        name,
        'epic',
        platform,
        fortnite.id,
        comprehensive,
        exact,
    ).catch(err => err);
    return players;
}

async function getPlayerStats(playerId) {
    let playerStats = await Scout.players.get(
        fortnite.id,
        playerId,
        '*',
    ).catch(err => err);
    return playerStats;
}


module.exports = { findPlayers, getPlayerStats };