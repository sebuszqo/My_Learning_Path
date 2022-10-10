const mysql = require("mysql2/promise");
const {v4: uuid} = require('uuid');

const pool = mysql.createPool(  // create the connection to database
    {
        host: 'localhost',
        user: 'root',
        password: 'root', // for mac mamp
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock', // for mac mamp
        database: 'students', // database that I use in this app
        decimalNumbers: true,
        namedPlaceholders: true,
    });

(async () => { // for using await !

    // 1
    console.log('1')
    const [courses] = await pool.execute('SELECT * FROM `courses`;')
    console.log(courses)

    // 2
    console.log('2')
    const [studentsAndCourses] = await pool.execute('SELECT `students`.`id`, `students`.`firstName`, `students`.`age`, `students`.`lastName`, `courses`.`name` FROM `students` JOIN `students_courses` ON `students`.`id` = `students_courses`.`studentId` JOIN `courses` ON `students_courses`.`courseName` = `courses`.`name` WHERE `students`.`age` >= :age', {
        age: 18,
    });
    console.log(studentsAndCourses)

    // 3
    console.log('3')
    const {affectedRows: deletedStudentsUnderGivenAge} = (await pool.execute('DELETE FROM `students` WHERE `age` < :age', {
        age: 18,
    }))[0];
    console.log(deletedStudentsUnderGivenAge)


    // 4
    console.log('4')
    const newStudentId = uuid();
    await pool.execute('INSERT INTO `students`(`id`,`firstName`,`lastName`,`age`, `addressStreet`, `createdAt`) VALUES(:id,:firstName,:lastName,:age,:addressStreet,:createdAt);', {
        id: newStudentId,
        firstName: 'Karolek',
        lastName: 'wielkasny',
        age: 20,
        addressStreet: 'Modrzewskiego',
        createdAt: '2003-02-11',
    });
    console.log('Dodano')

    await pool.end()
})();