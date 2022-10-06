const mysql = require('mysql2/promise');


(async () => { // for using await !

    // create the connection to database

    const pool = await mysql.createPool({ // connection === con
        host: 'localhost',
        user: 'root',
        password: 'root', // for mac mamp
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock', // for mac mamp
        database: 'test', // database that I use in this app
        decimalNumbers: true,
        namedPlaceholders: true,
    });

    const cars = [
        {
            registrationNo: 'RZ 23567',
            brand: 'Audi',
            model: 'A4 Avant',
            color: 'black',
            firstRegistrationAt: '2022-02-02',
            price: 350000,
        }
        ,
        {
            registrationNo: 'KR GH22',
            brand: 'Toyota',
            model: 'Corolla',
            color: 'black',
            firstRegistrationAt: '2021-03-11',
            price: 110000,
        }
        ,
        {
            registrationNo: 'WE IJU44',
            brand: 'Skoda',
            model: 'Fabia',
            color: 'yellow',
            firstRegistrationAt: '2022-08-02',
            price: 820233,
        }
        ,
    ]
    const statement = await pool.prepare('INSERT INTO `cars` VALUES(?, ?, ?, ?, ?, ?);');
    try {
        for (const car of cars) {
            await statement.execute(Object.values(car));
            console.log(Object.values(car))
        }

    } finally {
        statement.close();
    }

    // const regNo = 'RZ 823ZS'
    // const [results] = await connection.execute('SELECT * FROM `cars` WHERE `registrationNo`= :myValue;', {
    //     myValue: regNo
    // });
    // console.log(results)
    pool.end();
})();