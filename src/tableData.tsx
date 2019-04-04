import React, {FC} from 'react';

export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface TableDataProps {
    todos: ITodo[]
}

const TableData: FC<TableDataProps> = ({todos}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
            </thead>
            <tbody>
            {
                !!todos.length && todos.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed.toString()}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
};

export default TableData;
