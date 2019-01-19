import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeComponent from '../components/Home/HomeComponent';

class RouteComponent extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={HomeComponent} exact />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default RouteComponent;