const request = require('request')
const getUserId = require('../helpers/get-user-id')

module.exports = async (req, res) => {

    const apiStats = process.env.STATS_API
    let username = req.query.username

    let handleError = () => {
        return res.end(JSON.stringify({
            error: true,
            message: 'Que merda! Ocorreu um erro'
        }))
    }

    let handleSuccess = data => {
        let stats = data.defaultModes
        let kills = stats.kills
        let partidas = stats.matchesplayed
        return res.end(JSON.stringify({
            kills: kills,
            vitorias: stats.placetop1,
            kd: parseFloat((kills / partidas).toFixed(2)),
            partidas: partidas
        }))
    }

    let makeRequest = uid => {
        let endpoint = 'overall'
        let path = `${apiStats}${endpoint}`
        let options = {
            url: path,
            qs: { uid: uid }
        }

        request(options, (error, response, body) => {
            data = JSON.parse(body)
            if (data.success === false) {
                return handleError()
            }
            return handleSuccess(data)
        })
    }

    await getUserId(username).then(makeRequest, handleError)

}