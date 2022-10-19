const {MongoClient, ObjectId} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});


(async () => {
    await client.connect();
    const db = client.db('music2'); // stworzenie nowej bazy
    // await db.createCollection('songs') // kolekcja songs zostanie utworzona lub:
    // const users = db.collection('songs') // kolekcja songs zostanie utworzona po wstawieniu dokumentów

    // const songs = [
    //     {
    //         title: 'Szary Świat',
    //         artist: 'Sanah',
    //         length: 300,
    //     },
    //     {
    //         title: 'Bones',
    //         artist: 'Imagine Dragons',
    //         length: 250,
    //     },
    //     {
    //         title: 'Blinding Lights',
    //         artist: 'The Weeknd',
    //         length: 282,
    //     },
    // ];
    // await db.collection('songs').insertMany(songs)
    //
    // console.log('All songs:')
    //
    // for await (const song of db.collection('songs').find()) {
    //     console.log(song)
    // }
    //
    // console.log('\nSongs by Sanah:')
    //
    // for await (const song of db.collection('songs').find({artist: {$eq: 'Sanah'}})) {
    //     console.log(song)
    // }

    //<-------------------------------------------------------------------------------->//
    const artists = [
        {

            name: 'Sanah',
            startedAt: new Date('2018-01-10 12:00'),
        },
        {
            name: 'Imagine Dragons',
            startedAt: new Date('2015-01-10 12:00'),
        },
        {
            name: 'The weeknd',
            startedAt: new Date('2020-01-10 12:00'),
        },
        {
            name: 'Ktoś',
            startedAt: new Date('1999-01-10 12:00'),
        },

    ];

    await db.collection('artists').insertMany(artists)

    await db.collection('songs').updateMany({}, {
        $unset: {
            artist: ''
        }
    });

    await db.collection('artists').deleteMany({
        startedAt: {
            $lt: new Date('2000-01-01 12:00')
        }
    })

    await client.close()
})();
