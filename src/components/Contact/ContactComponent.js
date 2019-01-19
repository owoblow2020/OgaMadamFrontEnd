import React, { Component } from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import HomeSignInComponent from '../Home/HomeSignInComponent';
import HomeSignUpComponent from '../Home/HomeSignUpComponent';

class ContactComponent extends Component {
    state = {  }
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
                            <h3>Contact</h3>
                            <span>Keep up to date with the latest news</span>
                          </div>
                          {/* <div className="page-breacrumbs">
                            <ul className="breadcrumbs">
                              <li><a href="#" title>Home</a></li>
                              <li><a href="#" title>Pages</a></li>
                              <li><a href="#" title>Contact</a></li>
                            </ul>
                          </div> */}
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
                      <div className="col-lg-6 column">
                        <div className="contact-form">
                          <h3>Keep In Touch</h3>
                          <form>
                            <div className="row">
                              <div className="col-lg-12">
                                <span className="pf-title">Full Name</span>
                                <div className="pf-field">
                                  <input type="text" placeholder="ALi TUFAN" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <span className="pf-title">Email</span>
                                <div className="pf-field">
                                  <input type="text" placeholder="ALi TUFAN" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <span className="pf-title">Subject</span>
                                <div className="pf-field">
                                  <input type="text" placeholder="ALi TUFAN" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <span className="pf-title">Message</span>
                                <div className="pf-field">
                                  <textarea defaultValue={""} />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <button type="submit">Send</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-6 column">
                        <div className="contact-textinfo style2">
                          <h3>JobHunt Office</h3>
                          <ul>
                            <li><i className="la la-map-marker" /><span>Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan, New York 10282 </span></li>
                            <li><i className="la la-phone" /><span>Call Us : 0934 343 343</span></li>
                            <li><i className="la la-fax" /><span>Fax : 0934 343 343</span></li>
                            <li><i className="la la-envelope-o" /><span>Email : info@jobhunt.com</span></li>
                          </ul>
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

export default ContactComponent;