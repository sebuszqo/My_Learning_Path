const {MongoClient, ObjectId} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});


(async () => {
    await client.connect();
    const db = client.db('test');
    const users = db.collection('users')
    const foundUsers = users.find();
    // console.log(foundUsers)
    // console.log(await foundUsers.next())
    // console.log(await foundUsers.hasNext())
    // console.log(await users.estimatedDocumentCount());
    // console.log(await foundUsers.toArray());

    // for await (const user of foundUsers) {
    //     console.log(user._id.toString());
    // }
    // const oneUser = await users.findOne({_id: ObjectId('634026afbd5d9dd339c38a3b')});
    // console.log(oneUser)

    // const result = await users.updateOne({
    //         _id: ObjectId('634546a78c221086898798f3'),
    //     },
    //     {
    //         $set: {
    //             email: 'mailto@agh.edu.pl',
    //         },
    //     });
    // console.log(result)

    //normally

    // const email = 'xyz@abc.com'
    // for await (const user of users.find({
    //     email: {$ne: email},
    // })) {
    //     console.log(user)
    // }

    //with SQL injection

    const email = {$ne: ''}
    for await (const user of users.find({
        email: String(email),
    })) {
        console.log(user)
    }


    await client.close()
})();

