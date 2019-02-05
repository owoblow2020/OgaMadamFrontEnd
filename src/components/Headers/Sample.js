import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAuth, authAction } from '../../actions';

class Sample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
        }

        this.onClick = this.onClick.bind(this);
    }

    componentWillMount() {
        if (this.props.data.auth) {
            this.setState({
                login: true
            });
        }        
    }

    onClick(e){
        e.preventDefault();
        this.props.onAuth({ isAuth: false });
        

    }
    
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const dashboardBtn = this.state.login ?
            <li className="menu-item-has-children">
                <Link to="/dashboard" >Dashboard</Link>
            </li> : ""

        const logoutBtn = this.state.login ?

            <div className="btn-extars">
                <ul className="account-btns">
                    <li className="signup-popup"><i className="la la-key" /> {this.Capitalize(this.props.data1.firstname)} {this.Capitalize(this.props.data1.lastname)}</li>
                    <li className="signin-popup" onClick={this.onClick}><Link to="" onClick={this.onClick}><i className="la la-external-link-square" /> Logout</Link></li>
                </ul>
            </div>
            :
            <div className="btn-extars">
                <Link to="/apply" className="post-job-btn"><i className="la la-plus" />Apply Jobs</Link>
                <ul className="account-btns">
                    <li className="signup-popup"><i className="la la-key" /> Sign Up</li>
                    <li className="signin-popup"><Link to="/login" ><i className="la la-external-link-square" /> Login</Link></li>
                </ul>
            </div>

        return (
            <div>
                <div className="responsive-header">
                    <div className="responsive-menubar">
                        <div className="res-logo"><Link to="" ><img src="http://placehold.it/178x40" alt="" /></Link></div>
                        <div className="menu-resaction">
                            <div className="res-openmenu">
                                <img src="images/icon.png" alt="" /> Menu
                            </div>
                            <div className="res-closemenu">
                                <img src="images/icon2.png" alt="" /> Close
                            </div>
                        </div>
                    </div>
                    <div className="responsive-opensec">
                    {logoutBtn}
                        {/* <form className="res-search">
                            <input type="text" placeholder="Job title, keywords or company name" />
                            <button type="submit"><i className="la la-search" /></button>
                        </form> */}
                        <div className="responsivemenu">
                            <ul>
                                <li className="menu-item-has-children">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="/about" >About Us</Link>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="/contact" >Contact Us</Link>
                                </li>
                                {dashboardBtn}
                            </ul>
                        </div>
                    </div>
                </div>
                <header className="gradient">
                    <div className="menu-sec">
                        <div className="container">
                            <div className="logo">
                                <Link to="/" ><img src="http://placehold.it/178x40" alt="" /></Link>
                            </div>{/* Logo */}
                            {logoutBtn}
                            <nav>
                                <ul>
                                    <li className="menu-item-has-children">
                                        <Link to="/" >Home</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link to="/about" >About Us</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link to="/contact" >Contact Us</Link>
                                    </li>
                                    {dashboardBtn}

                                </ul>
                            </nav>{/* Menus */}
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.AuthReducer);
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

export default connect(mapStateToProps, mapDispatchToProps)(Sample);