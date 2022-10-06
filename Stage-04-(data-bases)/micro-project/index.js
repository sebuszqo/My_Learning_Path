const {pool} = require("./utils/db");
const {TodoRecord} = require("./records/todo.record");

(async () => {
    const foundTodo = await TodoRecord.find('');
    await foundTodo.update('Zmiana mojego todo')
})();