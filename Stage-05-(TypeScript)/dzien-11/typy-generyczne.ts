interface SingleTodoToCreate {
    userId: number;
    title: string;
    completed: boolean;
}

interface SingleTodo extends SingleTodoToCreate {
    id: number;
}


class TodoApi {
    private readonly url = `https://jsonplaceholder.typicode.com/todos/`

    async getSingle(id: number): Promise<SingleTodo> {
        const res = await fetch(`${this.url}/${id}`)
        const data = await res.json()
        return data
    }

    async listAll(): Promise<SingleTodo[]> {
        const res = await fetch(`${this.url}/`)
        const data = await res.json()
        return data
    }

    async create(task: SingleTodoToCreate): Promise<SingleTodo> {
        const res = await fetch(`${this.url}/`, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        });
        const data = await res.json()
        return data
    }
}

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

// async function getTodo(id: number): Promise<SingleTodo> {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     const data = await res.json()
//     return data
// }
//
// (async () => {
//     const todo = await getTodo(10)
//     console.log(todo.title, todo.completed ? "is completed" : "is to be done")
// })();


// typ generyczny to tablica
//const ar: Array<number> [1,2,3]