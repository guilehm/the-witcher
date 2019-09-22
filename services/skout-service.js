const Scout = require("@scoutsdk/server-sdk");

const SKOUT_CLIENT_ID = process.env.SKOUT_CLIENT_ID;
const SKOUT_CLIENT_SECRET = process.env.SKOUT_CLIENT_SECRET;

async function configureScoutClient() {
    let ScoutClient = await Scout.configure({
        clientId: SKOUT_CLIENT_ID,
        clientSecret: SKOUT_CLIENT_SECRET,
        scope: "public.read"
    });
    return ScoutClient;
}

async function getFortnite(game) {
    let titles = await Scout.titles.list();
    let fortnite = titles.find(t => t.slug === game);
    return fortnite;
}

async function findPlayers(name, platform=null, comprehensive=true, exact=true) {
    let fortnite = await getFortnite('fortnite');
    let players = await Scout.players.search(
        name,
        'epic',
        platform,
        fortnite.id,
        comprehensive,
        exact,
    );
    return players;
}

configureScoutClient();

module.exports = { getFortnite, findPlayers };