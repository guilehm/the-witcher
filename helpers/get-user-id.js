const request = require('request')


async function getUserId(username) {

    const api_uid = process.env.UID_API

    let options = {
        url: api_uid,
        qs: { username: username},
    }

    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) reject(error)
            data = JSON.parse(body)
            console.log('1o RESULTADO ' + data.uid)
            resolve(data.uid)
        })
    })
}

module.exports = getUserId
