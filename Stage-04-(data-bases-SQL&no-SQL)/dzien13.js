const mysql = require('mysql2/promise');


(async()=>{ // for using await !

    // create the connection to database

    const connection = await mysql.createConnection({ // connection === con
        host: 'localhost',
        user: 'root',
        password: 'root', // for mac mamp
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock', // for mac mamp
        database: 'test', // database that I use in this app
    });
        // const {affectedRows} = (await connection.execute('UPDATE `cars` SET `price` = `price` + 10000 WHERE `registrationNo` = "SK 223H";'))[0];
        // const answer = await connection.execute('INSERT INTO `cars` VALUES("RZ 823ZS", "VOLVO", "s60", "red","2021-09-02",167000);');
        const {insertId} = (await connection.execute('INSERT INTO `cars_square` (`registrationNumber`, `placAdress`) VALUES("RZ 823ZS", "Rzeszów");'))[0];
    console.log(insertId) // destrukturyzacja naszej tablicy wynikowej aby console.log() tylko to co nam potrzebne
    connection.end();
})();