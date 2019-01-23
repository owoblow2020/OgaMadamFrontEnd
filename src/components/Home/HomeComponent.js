import React, { Component } from 'react';
import HomeMenuComponent from './HomeMenuComponent';
import HomeBannerComponent from './HomeBannerComponent';
import HomeCategoryComponent from './HomeCategoryComponent';
import HomeApplyComponent from './HomeApplyComponent';
import HomeCandidatesComponent from './HomeCandidatesComponent';
import HomeSignInComponent from './HomeSignInComponent';
import HomeSignUpComponent from './HomeSignUpComponent';
import Footer from '../Footer';

class HomeComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="theme-layout" id="scrollup">
                    <HomeMenuComponent />
                    <HomeBannerComponent />
                    <HomeCategoryComponent />
                    <HomeApplyComponent />
                    <HomeCandidatesComponent />
                    <Footer />
                </div>
                <HomeSignInComponent />
                <HomeSignUpComponent />
            </div>
        );
    }
}

export default HomeComponent;