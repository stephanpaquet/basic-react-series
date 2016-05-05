import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    constructor() {
        super();
        this.name = 'Willy';
    }

    render() {
        return (
            <h1>It works {this.name} !!!</h1>
        )
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
