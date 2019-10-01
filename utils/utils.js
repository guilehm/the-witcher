const Metadata = require('../database/models/metadata');
const Segment = require('../database/models/segment');


function saveMetadata(stats) {
    let metadatas = stats.stats.map(data => data['metadata'])
    metadatas.forEach(data => {
        Metadata.findOneAndUpdate({ key: data.key }, data, { upsert: true })
            .then(m => console.log(`Success updating metadata ${m.key}`))
            .catch(e => console.log(e))
    })
}

function saveSegment(stats) {
    let segments = stats.segments.map(segment => segment['metadata'][0])
    segments.forEach(segment => {
        Segment.findOneAndUpdate({ value: segment.value }, segment, { upsert: true })
            .then(s => console.log(`Success updating segment ${s.value}`))
            .catch(e => console.log(e))
    })
}

module.exports = { saveMetadata, saveSegment }
