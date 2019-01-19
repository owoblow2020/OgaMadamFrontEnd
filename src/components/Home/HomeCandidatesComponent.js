import React, { Component } from 'react';
class HomeCandidatesComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <section>
                    <div className="block no-padding">
                        <div data-velocity="-.2" style={{ background: 'url(images/job7.jpg) repeat scroll 50% 422.28px transparent' }} className="parallax scrolly-invisible" />{/* PARALLAX BACKGROUND IMAGE */}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="download-sec">
                                        <div className="download-text">
                                            <h3>Download &amp; Enjoy</h3>
                                            <p>Search, find and apply for jobs directly on your mobile device or desktop Manage all of the jobs you have applied to from a convenience secure dashboard.</p>
                                            <ul>
                                                <li>
                                                    <a href="#" title>
                                                        <i className="la la-apple" />
                                                        <span>App Store</span>
                                                        <p>Available now on the</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title>
                                                        <i className="la la-android" />
                                                        <span>Google Play</span>
                                                        <p>Get in on</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="download-img">
                                            <img src="images/job6.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="block gray">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="heading">
                                        <h2>Featured Candidates</h2>
                                        <span>Every single one of our jobs has some kind of flexibility option</span>
                                    </div>{/* Heading */}
                                    <div className="team-sec">
                                        <div className="row" id="team-carousel">
                                            <div className="col-lg-3">
                                                <div className="team">
                                                    <div className="team-img"><img src="http://grandetest.com/theme/jobhunt-html/images/resource/t1.jpg" alt="" /></div>
                                                    <div className="team-detail">
                                                        <h3><a href="#" title>Amanda Cook</a></h3>
                                                        <span>I Knew You Were Trouble</span>
                                                        <p>The Random Name Generator is a simple fiction writing tool…</p>
                                                        <a href="#" title>View Resume <i className="la la-long-arrow-right" /></a>
                                                    </div>
                                                </div>{/* Team */}
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="team">
                                                    <div className="team-img"><img src="http://grandetest.com/theme/jobhunt-html/images/resource/t2.jpg" alt="" /></div>
                                                    <div className="team-detail">
                                                        <h3><a href="#" title>İbrahim Agay</a></h3>
                                                        <span>Developer</span>
                                                        <p>The Random Name Generator is a simple fiction writing tool…</p>
                                                        <a href="#" title>View Resume <i className="la la-long-arrow-right" /></a>
                                                    </div>
                                                </div>{/* Team */}
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="team">
                                                    <div className="team-img"><img src="http://grandetest.com/theme/jobhunt-html/images/resource/t3.jpg" alt="" /></div>
                                                    <div className="team-detail">
                                                        <h3><a href="#" title>Ali Tufan</a></h3>
                                                        <span>Senior UI / UX Designer</span>
                                                        <p>The Random Name Generator is a simple fiction writing tool…</p>
                                                        <a href="#" title>View Resume <i className="la la-long-arrow-right" /></a>
                                                    </div>
                                                </div>{/* Team */}
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="team">
                                                    <div className="team-img"><img src="http://grandetest.com/theme/jobhunt-html/images/resource/t2.jpg" alt="" /></div>
                                                    <div className="team-detail">
                                                        <h3><a href="#" title>Juan Suso</a></h3>
                                                        <span>IT Outsource Company</span>
                                                        <p>The Random Name Generator is a simple fiction writing tool…</p>
                                                        <a href="#" title>View Resume <i className="la la-long-arrow-right" /></a>
                                                    </div>
                                                </div>{/* Team */}
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="team">
                                                    <div className="team-img"><img src="http://grandetest.com/theme/jobhunt-html/images/resource/t2.jpg" alt="" /></div>
                                                    <div className="team-detail">
                                                        <h3><a href="#" title>Senimae Zuis</a></h3>
                                                        <span>Web Designer</span>
                                                        <p>The Random Name Generator is a simple fiction writing tool…</p>
                                                        <a href="#" title>View Resume <i className="la la-long-arrow-right" /></a>
                                                    </div>
                                                </div>{/* Team */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default HomeCandidatesComponent;