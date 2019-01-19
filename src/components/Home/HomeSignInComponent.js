import React, { Component } from 'react';

class HomeSignInComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="account-popup-area signin-popup-box">
                    <div className="account-popup">
                        <span className="close-popup"><i className="la la-close" /></span>
                        <h3>User Login</h3>
                        <span>Click To Login With Demo User</span>
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
                            <p className="remember-label">
                                <input type="checkbox" name="cb" id="cb1" /><label htmlFor="cb1">Remember me</label>
                            </p>
                            <a href="#" title>Forgot Password?</a>
                            <button type="submit">Login</button>
                        </form>
                        <div className="extra-login">
                            <span>Or</span>
                            <div className="login-social">
                                <a className="fb-login" href="#" title><i className="fa fa-facebook" /></a>
                                <a className="tw-login" href="#" title><i className="fa fa-twitter" /></a>
                            </div>
                        </div>
                    </div>
                </div>{/* LOGIN POPUP */}
            </div>
        );
    }
}

export default HomeSignInComponent;