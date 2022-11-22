interface SingleTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getTodo(id: number): Promise<SingleTodo> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await res.json()
    return data
}

(async () => {
    const todo = await getTodo(10)
    console.log(todo.title, todo.completed ? "is completed" : "is to be done")
})();


// typ generyczny to tablica
//const ar: Array<number> [1,2,3]