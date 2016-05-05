import React from "react";
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'Will from state',
            title: 'Welcome !',
        }
    }
    render() {
        return (
            <div>
                {this.state.name}
                <Header title={this.state.title}/>
                <Footer />
            </div>
        )
    }
}
