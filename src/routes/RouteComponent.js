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
//import Test from '../components/Test';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import Transaction from '../components/dashboardPages/Transaction';

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
                        {/* <Route path="/view-candidate/:id" component={CandidatePageComponent} /> */}
                        <Route path="/login" component={Login} />
                        {/* <Route path="/test" component={Test} /> */}
                        {/* private route */}
                        <PrivateRoute path="/dashboard" component={CandidateDashboard} />
                        <PrivateRoute path="/view-candidate/:id" component={CandidatePageComponent} />
                        <PrivateRoute path="/transactions" component={Transaction} />
                        <Route component={ErrorComponent} />
                        
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default RouteComponent;