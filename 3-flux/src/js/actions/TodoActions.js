import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodos() {
    // axios("http://someurl.com/somedataendpoint").then((data) => {
    //     console.log("Got the data !", data)
    // });

    dispatcher.dispatch({
        type: "FETCH_TODOS"
    });

    setTimeout(() => {
        dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
            {
                id: 123456535345,
                text: "Go Shopping Again",
                complete: false
            },
            {
                id: 123556757645,
                text: "Go for a pizza",
                complete: true
            }
        ]});
    }, 1000);
}
