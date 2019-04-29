import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../screens/home/home';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <h1>Error: 404 not found</h1>
                <h2>There's no page for this URL. Please return to main page.</h2>
                <img />
            </div>
        )
    }
}

class Router extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default Router;