import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeComponent from '../components/Home/HomeComponent';
import AboutComponent from '../components/About/AboutComponent';
import ContactComponent from '../components/Contact/ContactComponent';
import CandidateFormComponent from '../components/Candidate/CandidateFormComponent';
import CandidateListComponenet from '../components/Candidate/CandidateListComponenet';
import CandidatePageComponent from '../components/Candidate/CandidatePageComponent';
import CandidateDashboard from '../components/Candidate/CandidateDashboard';
import ErrorComponent from '../components/ErrorComponent';
import Test from '../components/Test';
import PrivateRoute from './PrivateRoute';

class RouteComponent extends Component {
    state = {}
    render() {
        return (
            // basename="/ogamadam"
            <BrowserRouter >
                <div>
                    <Switch>
                        <Route path="/" component={HomeComponent} exact />
                        <Route path="/about" component={AboutComponent} />
                        <Route path="/contact" component={ContactComponent} />
                        <Route path="/apply" component={CandidateFormComponent} />
                        <Route path="/candidate-list" component={CandidateListComponenet} />
                        <Route path="/view-candidate" component={CandidatePageComponent} />
                        <Route path="/test" component={Test} />
                        <PrivateRoute path="/dashboard" component={CandidateDashboard} />
                        {/* <Route path="/dashboard" component={} /> */}
                        <Route component={ErrorComponent} />
                        {/* private route */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default RouteComponent;