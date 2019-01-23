import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeMenuComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="responsive-header three">
                    <div className="responsive-menubar">
                        <div className="res-logo"><a href="index.html" title=""><img src="http://placehold.it/178x40" alt="" /></a></div>
                        <div className="menu-resaction">
                            <div className="res-openmenu">
                                <img src="images/icon5.png" alt="" /> Menu
                    </div>
                            <div className="res-closemenu">
                                <img src="images/icon6.png" alt="" /> Close
                    </div>
                        </div>
                    </div>
                    <div className="responsive-opensec">
                        <div className="btn-extars">
                            <Link to="/apply" className="post-job-btn"><i className="la la-plus" />Apply Jobs</Link>
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
                                    <Link to="/" >Home</Link>

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
                <header className="stick-top style3">
                    <div className="menu-sec">
                        <div className="container">
                            <div className="logo">
                                <a href="/" title=""><img src="http://placehold.it/203x34" alt="" /></a>
                            </div>{/* Logo */}
                            <div className="btn-extars">
                            <Link to="/apply" className="post-job-btn"><i className="la la-plus" />Apply Jobs</Link>
                                <ul className="account-btns">
                                    <li className="signup-popup"><Link to=""><i className="la la-key" /> Sign Up</Link></li>
                                    <li className="signin-popup"><Link to=""><i className="la la-external-link-square" /> Login</Link></li>
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
                                    <li className="menu-item-has-children">
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

export default HomeMenuComponent;