const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});


(async () => {
    await client.connect();
    const db = client.db('test_music');
    const songs = db.collection('songs')
    console.log("connection to database is ok")
    console.log(songs.find())
    await client.close()
})();

