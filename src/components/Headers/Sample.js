import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sample extends Component {
    state = {}
    render() {
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
                        <div className="btn-extars">
                            <Link to="/apply" className="post-job-btn" ><i className="la la-plus" />Post Jobs</Link>
                            <ul className="account-btns">
                                <li className="signup-popup"><Link to=""><i className="la la-key" /> Sign Up</Link></li>
                                <li className="signin-popup"><Link to=""><i className="la la-external-link-square" /> Login</Link></li>
                            </ul>
                        </div>{/* Btn Extras */}
                        <form className="res-search">
                            <input type="text" placeholder="Job title, keywords or company name" />
                            <button type="submit"><i className="la la-search" /></button>
                        </form>
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
                                <li className="menu-item-has-children">
                                    <Link to="/" ></Link>
                                </li>
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
                            <div className="btn-extars">
                                <Link to="/apply" className="post-job-btn"><i className="la la-plus" />Post Jobs</Link>
                                <ul className="account-btns">
                                    <li className="signup-popup"><i className="la la-key" /> Sign Up</li>
                                    <li className="signin-popup"><i className="la la-external-link-square" /> Login</li>
                                </ul>
                            </div>{/* Btn Extras */}
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
                                    <li >
                                        <Link to="/" ></Link>
                                    </li>

                                </ul>
                            </nav>{/* Menus */}
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default Sample;