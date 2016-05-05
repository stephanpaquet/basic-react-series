import React from 'react';

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export default class Layout extends React.Component {
    render() {
       const { location } = this.props;
        return (
            <div>
                <Nav location={location}></Nav>
                <h1>KillerNews.net</h1>
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}
