const {TodoRepository} = require("./repositories/todo.repository");
const {client} = require("./utils/db");
const {TodoRecord} = require("./records/todo.record");


(async () => {

    // const todo = new TodoRecord({
    //     title: 'skonczyc projekt mongodb2'
    // });
    // const result = await TodoRepository.insert(todo)
    // console.log(result)
    // console.log(await TodoRepository.findAll())
    const todo = await TodoRepository.find('635011c68749c685a4ccccd8')
    todo.title = 'Nowy tytul'
    // await TodoRepository.update(todo)
    // console.log(await TodoRepository.find('635011c68749c685a4ccccd8'))

    await TodoRepository.delete(todo)
    console.log(await TodoRepository.find('635011c68749c685a4ccccd8'))
})();