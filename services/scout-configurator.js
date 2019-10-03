const Scout = require("@scoutsdk/server-sdk");

const SCOUT_CLIENT_ID = process.env.SCOUT_CLIENT_ID;
const SCOUT_CLIENT_SECRET = process.env.SCOUT_CLIENT_SECRET;


async function configureScoutClient() {
    let ScoutClient = await Scout.configure({
        clientId: SCOUT_CLIENT_ID,
        clientSecret: SCOUT_CLIENT_SECRET,
        scope: "public.read"
    });
    return ScoutClient;
}


async function getFortnite(game) {
    let titles = await Scout.titles.list();
    let fortnite = titles.find(t => t.slug === game);
    return fortnite;
}


configureScoutClient();
module.exports = { Scout, getFortnite };
