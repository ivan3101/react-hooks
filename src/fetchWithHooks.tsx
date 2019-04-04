import React, {FC, useEffect, useState} from 'react';
import TableData, {ITodo} from "./tableData";

const FetchWithHooks: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(response => response.json())
            .then(todos => setTodos(todos.slice(0, 10)));
    }, []);

    return (
        <div>
            <h4>Data Fetching with Hooks</h4>
            <TableData todos={todos} />
        </div>
    );
};

export default FetchWithHooks;
