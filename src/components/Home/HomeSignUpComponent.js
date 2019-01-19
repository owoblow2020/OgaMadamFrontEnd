import React, { Component } from 'react';

class HomeSignUpComponent extends Component {
    state = {  }
    render() {
        return (
            <div>
                                <div className="account-popup-area signup-popup-box">
                    <div className="account-popup">
                        <span className="close-popup"><i className="la la-close" /></span>
                        <h3>Sign Up</h3>
                        <div className="select-user">
                            <span>Candidate</span>
                            <span>Employer</span>
                        </div>
                        <form>
                            <div className="cfield">
                                <input type="text" placeholder="Username" />
                                <i className="la la-user" />
                            </div>
                            <div className="cfield">
                                <input type="password" placeholder="********" />
                                <i className="la la-key" />
                            </div>
                            <div className="cfield">
                                <input type="text" placeholder="Email" />
                                <i className="la la-envelope-o" />
                            </div>
                            <div className="dropdown-field">
                                <select data-placeholder="Please Select Specialism" className="chosen">
                                    <option>Web Development</option>
                                    <option>Web Designing</option>
                                    <option>Art &amp; Culture</option>
                                    <option>Reading &amp; Writing</option>
                                </select>
                            </div>
                            <div className="cfield">
                                <input type="text" placeholder="Phone Number" />
                                <i className="la la-phone" />
                            </div>
                            <button type="submit">Signup</button>
                        </form>
                        <div className="extra-login">
                            <span>Or</span>
                            <div className="login-social">
                                <a className="fb-login" href="#" title><i className="fa fa-facebook" /></a>
                                <a className="tw-login" href="#" title><i className="fa fa-twitter" /></a>
                            </div>
                        </div>
                    </div>
                </div>{/* SIGNUP POPUP */}
                
            </div>
        );
    }
}

export default HomeSignUpComponent;