import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginAuth } from '../../actions';
import { connect } from 'react-redux';

class HomeSignInComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
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
        const post = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.onLogin(post);

    }

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
                        <form onSubmit={this.onSubmit}>
                            <div className="cfield">
                                <input name="username" type="text" onChange={this.onChange} value={this.state.username} placeholder="Username" />
                                <i className="la la-user" />
                            </div>
                            <div className="cfield">
                                <input name="password" type="password" onChange={this.onChange} value={this.state.password} placeholder="********" />
                                <i className="la la-key" />
                            </div>
                            <p className="remember-label">
                                <input type="checkbox" name="cb" id="cb1" /><label htmlFor="cb1">Remember me</label>
                            </p>
                            <button type='submit'>Login</button>
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
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (inputTaskName) => {
            dispatch(loginAuth(inputTaskName));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSignInComponent);