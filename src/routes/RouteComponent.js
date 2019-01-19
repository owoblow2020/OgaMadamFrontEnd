import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeComponent from '../components/Home/HomeComponent';
import AboutComponent from '../components/About/AboutComponent';

class RouteComponent extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={HomeComponent} exact />
                        <Route path="/about" component={AboutComponent} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default RouteComponent;