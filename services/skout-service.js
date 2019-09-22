const Scout = require("@scoutsdk/server-sdk");

const SKOUT_CLIENT_ID = process.env.SKOUT_CLIENT_ID;
const SKOUT_CLIENT_SECRET = process.env.SKOUT_CLIENT_SECRET;

async function getScoutClient() {
    const ScoutClient = await Scout.configure({
        clientId: SKOUT_CLIENT_ID,
        clientSecret: SKOUT_CLIENT_SECRET,
        scope: "public.read"
      });
    return ScoutClient;
}


module.exports = { getScoutClient };