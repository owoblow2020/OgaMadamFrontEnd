import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div>
                <footer>
                    <div className="block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 column">
                                    <div className="widget">
                                        <div className="about_widget">
                                            <div className="logo">
                                                <Link to=""><img src="http://placehold.it/178x40" alt="" /></Link>
                                            </div>
                                            <span>Collin Street West, Victor 8007, Australia.</span>
                                            <span>+1 246-345-0695</span>
                                            <span>info@jobhunt.com</span>
                                            <div className="social">
                                                <Link to=""><i className="fa fa-facebook" /></Link>
                                                <Link to=""><i className="fa fa-twitter" /></Link>
                                                <Link to=""><i className="fa fa-linkedin" /></Link>
                                                <Link to=""><i className="fa fa-pinterest" /></Link>
                                                <Link to=""><i className="fa fa-behance" /></Link>
                                            </div>
                                        </div>{/* About Widget */}
                                    </div>
                                </div>
                                <div className="col-lg-4 column">
                                    <div className="widget">
                                        <h3 className="footer-title">Frequently Asked Questions</h3>
                                        <div className="link_widgets">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <Link to="">Privacy &amp; Seurty </Link>
                                                    <Link to="">Terms of Serice</Link>
                                                    <Link to="">Communications </Link>
                                                    <Link to="">Referral Terms </Link>
                                                    <Link to="">Lending Licnses </Link>
                                                    <Link to="">Disclaimers </Link>
                                                </div>
                                                <div className="col-lg-6">
                                                    <Link to="">Support </Link>
                                                    <Link to="">How It Works </Link>
                                                    <Link to="">For Employers </Link>
                                                    <Link to="">Underwriting </Link>
                                                    <Link to="">Contact Us</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 column">
                                    <div className="widget">
                                        <h3 className="footer-title">Find Jobs</h3>
                                        <div className="link_widgets">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <Link to="">US Jobs</Link>
                                                    <Link to="">Canada Jobs</Link>
                                                    <Link to="">UK Jobs</Link>
                                                    <Link to="">Emplois en Fnce</Link>
                                                    <Link to="">Jobs in Deuts</Link>
                                                    <Link to="">Vacatures China</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 column">
                                    <div className="widget">
                                        <div className="download_widget">
                                            <Link to=""><img src="images/app_store.png" alt="" /></Link>
                                            <Link to=""><img src="images/play_store.png" alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-line">
                        <span>© 2018 Jobhunt All rights reserved. Design by Creative Layers</span>
                        <a href="#scrollup" className="scrollup" title=""><i className="la la-arrow-up" /></a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;