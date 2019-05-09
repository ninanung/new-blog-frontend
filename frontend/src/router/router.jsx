import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from 'react-helmet';

import notFoundImage from '../assets/404.jpg';

import Home from '../screens/home/home';
import Board from '../screens/board/board';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>404</title>
                </Helmet>
                <h1>Error: 404 not found</h1>
                <h2>There's no page for this URL. Please return to <a href='/'>main page.</a></h2>
                <img src={notFoundImage} alt='HK M4' />
            </div>
        )
    }
}

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/board' component={ Board } />
                    <Route component={ NotFound } />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;