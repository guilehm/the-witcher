const Metadata = require('../database/models/metadata');


function saveMetadata(stats) {
    let metadatas = stats.stats.map(data => data['metadata'])
    metadatas.forEach(data => {
        Metadata.findOneAndUpdate({ key: data.key }, data, { upsert: true })
            .then(m => console.log(`Success updating ${m.key}`))
            .catch(e => console.log(e))
    })
}

module.exports = { saveMetadata }
