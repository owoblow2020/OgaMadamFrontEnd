import React, { Component } from 'react';
class Menu extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="responsive-header">
                    <div className="responsive-menubar">
                        <div className="res-logo"><a href="index.html" title><img src="http://placehold.it/178x40" alt /></a></div>
                        <div className="menu-resaction">
                            <div className="res-openmenu">
                                <img src="images/icon.png" alt /> Menu
                    </div>
                            <div className="res-closemenu">
                                <img src="images/icon2.png" alt /> Close
                    </div>
                        </div>
                    </div>
                    <div className="responsive-opensec">
                        <div className="btn-extars">
                            <a href="#" title className="post-job-btn"><i className="la la-plus" />Post Jobs</a>
                            <ul className="account-btns">
                                <li className="signup-popup"><a title><i className="la la-key" /> Sign Up</a></li>
                                <li className="signin-popup"><a title><i className="la la-external-link-square" /> Login</a></li>
                            </ul>
                        </div>{/* Btn Extras */}
                        <form className="res-search">
                            <input type="text" placeholder="Job title, keywords or company name" />
                            <button type="submit"><i className="la la-search" /></button>
                        </form>
                        <div className="responsivemenu">
                            <ul>
                                <li className="menu-item-has-children">
                                    <a href="/" title>Home</a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="/about" title>About Us</a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="/" title>Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <header className="white">
                    <div className="menu-sec">
                        <div className="container">
                            <div className="logo">
                                <a href="index.html" title><img src="http://placehold.it/178x40" alt /></a>
                            </div>{/* Logo */}
                            <div className="btn-extars">
                                <a href="/apply" title className="post-job-btn"><i className="la la-plus" />Apply Jobs</a>
                                <ul className="account-btns">
                                    <li className="signup-popup"><a title><i className="la la-key" /> Sign Up</a></li>
                                    <li className="signin-popup"><a title><i className="la la-external-link-square" /> Login</a></li>
                                </ul>
                            </div>{/* Btn Extras */}
                            <nav>
                                <ul>
                                    <li className="menu-item-has-children">
                                        <a href="/" title>Home</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="/about" title>About Us</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="/contact" title>Contact Us</a>
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

export default Menu;