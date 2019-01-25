import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from './Menu';
import Footer from './Footer';
import HomeSignInComponent from './Home/HomeSignInComponent';
import HomeSignUpComponent from './Home/HomeSignUpComponent';

class Login extends Component {
    state = {}
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        if (this.props.data.auth === true) {
            return <Redirect to={from} />
        }
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
                                                <h3>Login</h3>
                                                <span>Keep up to date with the latest news</span>
                                            </div>
                                            <div className="page-breacrumbs">
                                                <ul className="breadcrumbs">
                                                    <li><a href="#" title>Home</a></li>
                                                    <li><a href="#" title>Pages</a></li>
                                                    <li><a href="#" title>Login</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="block remove-bottom">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="account-popup-area signin-popup-box static">
                                            <div className="account-popup">
                                                <span>Lorem ipsum dolor sit amet consectetur adipiscing elit odio duis risus at lobortis ullamcorper</span>
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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        data: state.LoginReducer
    }
}

export default connect(mapStateToProps, null)(Login);