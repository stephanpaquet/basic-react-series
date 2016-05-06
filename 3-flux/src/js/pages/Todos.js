import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);

        // Initial state
        this.state = {
            todos: TodoStore.getAll(),
        };
    }

    // call at the first time this component is innitialized (if exists)
    componentWillMount() {
        TodoStore.on("change", this.getTodos);
    }

    componentWillUnmount() {
        TodoStore.removeListener("change", this.getTodos);
    }

    getTodos() {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

    createTodo() {
        TodoActions.createTodo(Date.now())
    }

    reloadTodos() {
        TodoActions.reloadTodos()
    }

    render() {
        const { todos } = this.state;
        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        });

        return (
            <div>
                <button className="btn btn-primary" onClick={this.reloadTodos.bind(this)}>Reload Todos</button>
                <button className="btn btn-primary" onClick={this.createTodo.bind(this)}>Create</button>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}
