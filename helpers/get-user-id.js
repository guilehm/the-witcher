const request = require('request')


async function getUserId(username) {

    const uidApi = process.env.UID_API

    let options = {
        url: uidApi,
        qs: { username: username},
    }

    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) reject(error)
            data = JSON.parse(body)
            resolve(data.uid)
        })
    })
}

module.exports = getUserId
