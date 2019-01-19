import React, { Component } from 'react';
import Menu from '../Menu';
import HomeSignInComponent from '../Home/HomeSignInComponent';
import HomeSignUpComponent from '../Home/HomeSignUpComponent';
import Footer from '../Footer';

class AboutComponent extends Component {
  state = {}
  render() {
    return (
      <div>
        <div className="theme-layout" id="scrollup">
          <Menu />
          <section>
            <div className="block no-padding  gray">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="inner2">
                      <div className="inner-title2">
                        <h3>About Us</h3>
                        <span>Keep up to date with the latest news</span>
                      </div>
                      <div className="page-breacrumbs">
                        {/* <ul className="breadcrumbs">
                          <li><a href="#" title>Home</a></li>
                          <li><a href="#" title>Pages</a></li>
                          <li><a href="#" title>About Us</a></li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="block">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-us">
                      <div className="row">
                        <div className="col-lg-12">
                          <h3>About Job Hunt</h3>
                        </div>
                        <div className="col-lg-7">
                          <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much. </p>
                          <p>Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.</p>
                        </div>
                        <div className="col-lg-5">
                          <img src="images/job1.jpeg" alt="" width="432" height="280" />
                        </div>
                        <div className="col-lg-12">
                          <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much. </p>
                          <p>Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.</p>
                        </div>
                      </div>
                      <div className="tags-share">
                        <div className="share-bar">
                          <a href="#" title className="share-fb"><i className="fa fa-facebook" /></a><a href="#" title className="share-twitter"><i className="fa fa-twitter" /></a><a href="#" title className="share-google"><i className="la la-google" /></a><span>Share</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="block remove-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="our-services">
                      <div className="row">
                        <div className="col-lg-12"><h2>Our Service</h2></div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="service">
                            <i className="la la-clock-o" /><div className="service-info"><h3>Advertise A Job</h3><p>Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus.</p></div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="service">
                            <i className="la la-search" /><div className="service-info"><h3>CV Search</h3><p>Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus.</p></div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="service">
                            <i className="la la-user" /><div className="service-info"><h3>Recruiter Profiles</h3><p>Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus.</p></div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="service">
                            <i className="la la-codepen" /><div className="service-info"><h3>Temp Search</h3><p>Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus.</p></div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="service">
                            <i className="la la-tv" /><div className="service-info"><h3>Display Jobs</h3><p>Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus.</p></div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                          <div className="service">
                            <i className="la la-diamond" /><div className="service-info"><h3>For Agencies</h3><p>Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus.</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
        <HomeSignInComponent />
        <HomeSignUpComponent />
      </div>

    );
  }
}

export default AboutComponent;