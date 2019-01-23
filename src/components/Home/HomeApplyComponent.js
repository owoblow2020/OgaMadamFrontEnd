import React, { Component } from 'react';
import {Link} from "react-router-dom";
class HomeApplyComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <section>
                    <div className="block double-gap-top double-gap-bottom">
                        <div data-velocity="-.1" style={{ background: 'url(images/job5.jpg) repeat scroll 50% 422.28px transparent' }} className="parallax scrolly-invisible layer color green" />{/* PARALLAX BACKGROUND IMAGE */}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="simple-text-block">
                                        <h3>Make a Difference in Your Career!</h3>
                                        <span>Oga Madam the fast and secured means to secure a job!</span>
                                        <Link to="/apply" className="rounded">Apply Job</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="block">
                        <div data-velocity="-.1" style={{ background: 'url(images/resource/parallax5.jpg) repeat scroll 50% 422.28px transparent' }} className="parallax scrolly-invisible no-parallax" />{/* PARALLAX BACKGROUND IMAGE */}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="heading">
                                        <h2>Featured Workers</h2>
                                        <span>Leading Employers already using job and talent.</span>
                                    </div>{/* Heading */}
                                    <div className="job-listings-sec">
                                        <div className="job-listing rounded">
                                            <div className="job-title-sec">
                                                <div className="c-logo"> <img src="http://grandetest.com/theme/jobhunt-html/images/resource/t1.jpg" width="98" height="51" alt="" /> </div>
                                                <h3><Link to="">Akachukwu Akunna</Link></h3>
                                                <span>Maids</span>
                                            </div>
                                            <span className="job-lctn"><i className="la la-map-marker" />Sacramento, California</span>
                                            <span className="fav-job"><i className="la la-heart-o" /></span>
                                            <span className="job-is ft"><Link to="/view-candidate">View</Link></span>
                                        </div>{/* Job */}
                                        <div className="job-listing rounded">
                                            <div className="job-title-sec">
                                                <div className="c-logo"> <img src="http://grandetest.com/theme/jobhunt-html/images/resource/t3.jpg" width="98" height="51" alt="" /> </div>
                                                <h3><Link to="">Bunkechukwu Cherechi</Link></h3>
                                                <span>Cleaner</span>
                                            </div>
                                            <span className="job-lctn"><i className="la la-map-marker" />Rennes, France</span>
                                            <span className="fav-job"><i className="la la-heart-o" /></span>
                                            <span className="job-is pt"><Link to="/view-candidate">View</Link></span>
                                        </div>{/* Job */}
                                        <div className="job-listing rounded">
                                            <div className="job-title-sec">
                                                <div className="c-logo"> <img src="http://grandetest.com/theme/jobhunt-html/images/resource/t2.jpg" width="98" height="51" alt="" /> </div>
                                                <h3><Link to="">Daluolisa Ebubechukwu </Link></h3>
                                                <span>Maids</span>
                                            </div>
                                            <span className="job-lctn"><i className="la la-map-marker" />London, United Kingdom</span>
                                            <span className="fav-job"><i className="la la-heart-o" /></span>
                                            <span className="job-is ft"><Link to="/view-candidate">View</Link></span>
                                        </div>{/* Job */}
                                        <div className="job-listing rounded">
                                            <div className="job-title-sec">
                                                <div className="c-logo"> <img src="http://grandetest.com/theme/jobhunt-html/images/resource/t3.jpg" width="98" height="51" alt="" /> </div>
                                                <h3><Link to="">Jamuike Jidenna</Link></h3>
                                                <span>Cooks</span>
                                            </div>
                                            <span className="job-lctn"><i className="la la-map-marker" />Istanbul, Turkey</span>
                                            <span className="fav-job"><i className="la la-heart-o" /></span>
                                            <span className="job-is fl"><Link to="/view-candidate">View</Link></span>
                                        </div>{/* Job */}
                                        <div className="job-listing rounded">
                                            <div className="job-title-sec">
                                                <div className="c-logo"> <img src="http://grandetest.com/theme/jobhunt-html/images/resource/t1.jpg" width="98" height="51" alt="" /> </div>
                                                <h3><Link to="">Zamekpere Urudinachi</Link></h3>
                                                <span>Nannies</span>
                                            </div>
                                            <span className="job-lctn"><i className="la la-map-marker" />Ajax, Ontario</span>
                                            <span className="fav-job"><i className="la la-heart-o" /></span>
                                            <span className="job-is tp"><Link to="/view-candidate">View</Link></span>
                                        </div>{/* Job */}
                                        <div className="job-listing rounded">
                                            <div className="job-title-sec">
                                                <div className="c-logo"> <img src="http://grandetest.com/theme/jobhunt-html/images/resource/t2.jpg" width="98" height="51" alt="" /> </div>
                                                <h3><Link to="">Egoamaka Chiamaka</Link></h3>
                                                <span>Cooks</span>
                                            </div>
                                            <span className="job-lctn"><i className="la la-map-marker" />Ankara / Turkey</span>
                                            <span className="fav-job"><i className="la la-heart-o" /></span>
                                            <span className="job-is ft"><Link to="/view-candidate">View</Link></span>
                                        </div>{/* Job */}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="browse-all-cat green">
                                        <Link to="/candidate-list" className="rounded">Load more listings</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="block remove-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="heading">
                                        <h2>How It Works</h2>
                                        <span>Each month, more than 7 million Jobhunt turn to website in their search for work, making over <br />160,000 applications every day.
                          </span>
                                    </div>{/* Heading */}
                                    <div className="how-to-sec style2">
                                        <div className="how-to">
                                            <span className="how-icon"><i className="la la-user" /></span>
                                            <h3>Register an account</h3>
                                            <p>Register an account with personal information on the website for verification</p>
                                        </div>
                                        <div className="how-to">
                                            <span className="how-icon"><i className="la la-file-archive-o" /></span>
                                            <h3>Specify &amp; search your job</h3>
                                            <p>Browse profiles, reviews, and proposals of verified workers on the platform </p>
                                        </div>
                                        <div className="how-to">
                                            <span className="how-icon"><i className="la la-list" /></span>
                                            <h3>Contact Worker</h3>
                                            <p>Make payment on the platform to employe any of the verified workers</p>
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

export default HomeApplyComponent;