export interface SingleTodo {
    userId: number;
    title: string;
    completed: boolean;
    id: number;
}

//
// interface SingleTodo extends SingleTodoToCreate {
//     id: number;
// }

export type SingleTodoToCreate = Omit<SingleTodo, 'id'>;