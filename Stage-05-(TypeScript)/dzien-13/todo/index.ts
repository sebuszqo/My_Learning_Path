import {TodoApi} from "./libs/todo-lib";

(async () => {
    const todo = new TodoApi()
    // console.log(await todo.getSingle(10))
    // console.log(await todo.listAll())
    const newToDo = await todo.create({
        title: "Wynieść smieci",
        userId: 1,
        completed: false,
    })
    console.log(newToDo.id)
    console.log(await todo.getSingle(newToDo.id))
})();