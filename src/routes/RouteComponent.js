import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeComponent from '../components/Home/HomeComponent';
import AboutComponent from '../components/About/AboutComponent';
import ContactComponent from '../components/Contact/ContactComponent';
import CandidateFormComponent from '../components/Candidate/CandidateFormComponent';
import CandidateListComponenet from '../components/Candidate/CandidateListComponenet';
import CandidatePageComponent from '../components/Candidate/CandidatePageComponent';
import CandidateDashboard from '../components/Candidate/CandidateDashboard';

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
                        <Route path="/apply" component={CandidateFormComponent} />
                        <Route path="/candidate-list" component={CandidateListComponenet} />
                        <Route path="/view-candidate" component={CandidatePageComponent} />
                        {/* private route */}
                        <Route path="/dashboard" component={CandidateDashboard} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default RouteComponent;