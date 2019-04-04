import React, {Component} from 'react';
import TableData, {ITodo} from './tableData';

export interface IFetchWithClassesState {
    todos: ITodo[]
}

class FetchWithClasses extends Component<{}, IFetchWithClassesState> {

    state: IFetchWithClassesState = {
        todos: []
    };

    async componentDidMount(): Promise<void> {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

            const todos = await response.json();

            this.setState(() => ({
                todos: todos.slice(0, 10)
            }))

        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div>
                <h4>Data fetching with Classes</h4>
                <TableData todos={this.state.todos}/>
            </div>
        );
    }
}

export default FetchWithClasses;