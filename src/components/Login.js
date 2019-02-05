import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from './Footer';
import HomeSignUpComponent from './Home/HomeSignUpComponent';
import { Link, withRouter } from 'react-router-dom';
import Sample from './Headers/Sample';
import { loginAuth, authAction } from '../actions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            status: "",
            btnText: "Login"
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.btn.setAttribute("disabled", "disabled");
        this.setState({ btnText: "Waiting....." });
        this.props.onLogin({ email: this.state.email, password: this.state.password });

    }

    componentDidUpdate(prevProps, prevState) {

        const newProps = this.props
        if (prevProps.data1 !== newProps.data1) {
            
            if (newProps.data1.role === 'Employer' && newProps.data1.isAuth === true) {
                newProps.onAuth({ isAuth: true });
                this.setState({
                    btnText: "Login"
                });

                this.props.history.push('/dashboard');
            } else if (newProps.data1.responseCode !== 200) {

                this.setState({
                    status: newProps.data1.message,
                    btnText: "Login"
                });

            } else {
                this.setState({
                    status: "Not Employers account",
                    btnText: "Login"
                });
            }
        }

    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        if (this.props.data.auth === true && this.props.data1.role === 'Employer' && this.props.data1.isAuth === true) {
            return <Redirect to={from} />
        }

        const warning = this.state.status !== "" ?

            <div className="alert alert-danger alert-dismissible fade show" style={{ height: 70, margintop: 50 }} role="alert">
                <strong>Failed!</strong>   {this.state.status}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            : ""
        return (
            <div>
                <div className="theme-layout" id="scrollup">
                    <Sample />
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
                                                    <li><Link to="">Home</Link></li>
                                                    <li><Link to="">Pages</Link></li>
                                                    <li><Link to="">Login</Link></li>
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
                                                {
                                                    warning
                                                }
                                                <span>Lorem ipsum dolor sit amet consectetur adipiscing elit odio duis risus at lobortis ullamcorper</span>
                                                <form onSubmit={this.onSubmit}>
                                                    <div className="cfield">
                                                        <input type="text" name="email" onChange={this.onChange} value={this.state.email} placeholder="Email" />
                                                        <i className="la la-user" />
                                                    </div>
                                                    <div className="cfield">
                                                        <input name="password" onChange={this.onChange} value={this.state.password} type="password" placeholder="********" />
                                                        <i className="la la-key" />
                                                    </div>
                                                    <p className="remember-label">
                                                    </p>
                                                    <Link to="">Forgot Password?</Link>
                                                    <button ref={btn => { this.btn = btn; }} type="submit">{this.state.btnText}</button>
                                                </form>
                                                <div className="extra-login">
                                                    <span>Or</span>
                                                    <div className="login-social">
                                                        <Link to="" className="fb-login"><i className="fa fa-facebook" /></Link>
                                                        <Link to="" className="tw-login"><i className="fa fa-twitter" /></Link>
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
                <HomeSignUpComponent />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.LoginReducer,
        data1: state.AuthReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (inputTaskName) => {
            dispatch(loginAuth(inputTaskName));
        },

        onAuth: (authInfo) => {
            dispatch(authAction(authInfo));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));