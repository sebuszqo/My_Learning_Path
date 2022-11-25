import {SingleTodo, SingleTodoToCreate} from "../types/index";

export class TodoApi {
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
