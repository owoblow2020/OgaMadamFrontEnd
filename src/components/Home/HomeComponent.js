import React, { Component } from 'react';
import HomeMenuComponent from './HomeMenuComponent';
import HomeBannerComponent from './HomeBannerComponent';
import HomeCategoryComponent from './HomeCategoryComponent';
import HomeApplyComponent from './HomeApplyComponent';
import HomeCandidatesComponent from './HomeCandidatesComponent';
import HomeFooterComponent from './HomeFooterComponent';
import HomeSignInComponent from './HomeSignInComponent';
import HomeSignUpComponent from './HomeSignUpComponent';

class HomeComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="page-loading">
                    <img src="images/loader.gif" alt="" />
                    <span>Skip Loader</span>
                </div>
                <div className="theme-layout" id="scrollup">
                    <HomeMenuComponent />
                    <HomeBannerComponent />
                    <HomeCategoryComponent />
                    <HomeApplyComponent />
                    <HomeCandidatesComponent />
                    <HomeFooterComponent />
                </div>
                <HomeSignInComponent />
                <HomeSignUpComponent />
            </div>
        );
    }
}

export default HomeComponent;