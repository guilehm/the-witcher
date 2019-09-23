const { Scout, getFortnite } = require('./skout-configurator');


async function findPlayers(name, platform = null, comprehensive = true, exact = true) {
    let fortnite = await getFortnite('fortnite');
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

async function getPlayerStats(playerId, segment = '*') {
    let playerStats = await Scout.players.get(
        'fortnite',
        playerId,
        segment,
    ).catch(err => err);
    return playerStats;
}


module.exports = { findPlayers, getPlayerStats };