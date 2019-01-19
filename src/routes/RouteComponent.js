import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeComponent from '../components/Home/HomeComponent';
import AboutComponent from '../components/About/AboutComponent';
import ContactComponent from '../components/Contact/ContactComponent';

class RouteComponent extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={HomeComponent} exact />
                        <Route path="/about" component={AboutComponent} />
                        <Route path="/contact" component={ContactComponent} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default RouteComponent;