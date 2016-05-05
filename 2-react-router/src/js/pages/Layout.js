import React from 'react';
import {Link} from "react-router";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-default">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="#">Home</a>
                    </div>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul class="nav navbar-nav">
                        <li>
                            <Link to="archives">Archives</Link>
                        </li>
                        <li>
                            <Link to="settings">Settings</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <h1>KillerNews.net</h1>
                {this.props.children}
            </div>
        )
    }
}
