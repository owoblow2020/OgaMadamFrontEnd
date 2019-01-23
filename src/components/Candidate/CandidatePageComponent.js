import React, { Component } from 'react';
import HomeSignInComponent from '../Home/HomeSignInComponent';
import HomeSignUpComponent from '../Home/HomeSignUpComponent';
import Footer from '../Footer';
import Menu from '../Menu';
import {Link} from 'react-router-dom';

class CandidatePageComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="theme-layout" id="scrollup">
                    <Menu />
                    <section>
                        <div className="block">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 column">
                                        <div className="job-single-sec">
                                            <div className="job-single-head">
                                                <div className="job-thumb"> <img src="http://placehold.it/107x101" alt="" /> </div>
                                                <div className="job-head-info">
                                                    <h4>Tix Dog</h4>
                                                    <span>274 Seven Sisters Road, London, N4 2HY</span>
                                                    <p><i className="la la-unlink" /> www.jobhunt.com</p>
                                                    <p><i className="la la-phone" /> +90 538 963 54 87</p>
                                                    <p><i className="la la-envelope-o" /> ali.tufan@jobhunt.com</p>
                                                </div>
                                            </div>{/* Job Head */}
                                            <div className="job-details">
                                                <h3>Job Description</h3>
                                                <p>Company is a 2016 Iowa City-born start-up that develops consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                                                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien</p>
                                                <h3>Required Knowledge, Skills, and Abilities</h3>
                                                <ul>
                                                    <li>Ability to write code – HTML &amp; CSS (SCSS flavor of SASS preferred when writing CSS)</li>
                                                    <li>Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred concepting)</li>
                                                    <li>Cross-browser and platform testing as standard practice</li>
                                                    <li>Experience using Invision a plus</li>
                                                    <li>Experience in video production a plus or, at a minimum, a willingness to learn</li>
                                                </ul>
                                                <h3>Education + Experience</h3>
                                                <ul>
                                                    <li>Advanced degree or equivalent experience in graphic and web design</li>
                                                    <li>3 or more years of professional design experience</li>
                                                    <li>Direct response email experience</li>
                                                    <li>Ecommerce website design experience</li>
                                                    <li>Familiarity with mobile and web apps preferred</li>
                                                    <li>Excellent communication skills, most notably a demonstrated ability to solicit and address creative and design feedback</li>
                                                    <li>Must be able to work under pressure and meet deadlines while maintaining a positive attitude and providing exemplary customer service</li>
                                                    <li>Ability to work independently and to carry out assignments to completion within parameters of instructions given, prescribed routines, and standard accepted practices</li>
                                                </ul>
                                            </div>
                                            <div className="share-bar">
                                                <span>Share</span><Link to="" className="share-fb"><i className="fa fa-facebook" /></Link><Link to="" className="share-twitter"><i className="fa fa-twitter" /></Link>
                                            </div>
                                            <div className="recent-jobs">
                                                <h3>Recent Jobs</h3>
                                                <div className="job-list-modern">
                                                    <div className="job-listings-sec no-border">
                                                        <div className="job-listing wtabs">
                                                            <div className="job-title-sec">
                                                                <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                                                <h3><Link to="">Web Designer / Developer</Link></h3>
                                                                <span>Massimo Artemisis</span>
                                                                <div className="job-lctn"><i className="la la-map-marker" />Sacramento, California</div>
                                                            </div>
                                                            <div className="job-style-bx">
                                                                <span className="job-is ft">Full time</span>
                                                                <span className="fav-job"><i className="la la-heart-o" /></span>
                                                                <i>5 months ago</i>
                                                            </div>
                                                        </div>
                                                        <div className="job-listing wtabs">
                                                            <div className="job-title-sec">
                                                                <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                                                <h3><Link to="">C Developer (Senior) C .Net</Link></h3>
                                                                <span>Massimo Artemisis</span>
                                                                <div className="job-lctn"><i className="la la-map-marker" />Sacramento, California</div>
                                                            </div>
                                                            <div className="job-style-bx">
                                                                <span className="job-is pt ">Part time</span>
                                                                <span className="fav-job"><i className="la la-heart-o" /></span>
                                                                <i>5 months ago</i>
                                                            </div>
                                                        </div>{/* Job */}
                                                        <div className="job-listing wtabs">
                                                            <div className="job-title-sec">
                                                                <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                                                <h3><Link to="">Regional Sales Manager South</Link></h3>
                                                                <span>Massimo Artemisis</span>
                                                                <div className="job-lctn"><i className="la la-map-marker" />Sacramento, California</div>
                                                            </div>
                                                            <div className="job-style-bx">
                                                                <span className="job-is ft ">Full time</span>
                                                                <span className="fav-job"><i className="la la-heart-o" /></span>
                                                                <i>5 months ago</i>
                                                            </div>
                                                        </div>{/* Job */}
                                                        <div className="job-listing wtabs">
                                                            <div className="job-title-sec">
                                                                <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                                                <h3><Link to="">Marketing Dairector</Link></h3>
                                                                <span>Massimo Artemisis</span>
                                                                <div className="job-lctn"><i className="la la-map-marker" />Sacramento, California</div>
                                                            </div>
                                                            <div className="job-style-bx">
                                                                <span className="job-is ft ">Full time</span>
                                                                <span className="fav-job"><i className="la la-heart-o" /></span>
                                                                <i>5 months ago</i>
                                                            </div>
                                                        </div>{/* Job */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 column">
                                    <Link to="" className="apply-thisjob"><i className="la la-paper-plane" />Apply for job</Link>
                                        <div className="apply-alternative">
                                            <Link to=""><i className="la la-linkedin" /> Apply with Linkedin</Link>
                                            <span><i className="la la-heart-o" /> Shortlist</span>
                                        </div>
                                        <div className="job-overview">
                                            <h3>Job Overview</h3>
                                            <ul>
                                                <li><i className="la la-money" /><h3>Offerd Salary</h3><span>£15,000 - £20,000</span></li>
                                                <li><i className="la la-mars-double" /><h3>Gender</h3><span>Female</span></li>
                                                <li><i className="la la-thumb-tack" /><h3>Career Level</h3><span>Executive</span></li>
                                                <li><i className="la la-puzzle-piece" /><h3>Industry</h3><span>Management</span></li>
                                                <li><i className="la la-shield" /><h3>Experience</h3><span>2 Years</span></li>
                                                <li><i className="la la-line-chart " /><h3>Qualification</h3><span>Bachelor Degree</span></li>
                                            </ul>
                                        </div>{/* Job Overview */}
                                        <div className="job-location">
                                            <h3>Job Location</h3>
                                            <div className="job-lctn-map">
                                                <iframe title="kkk" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d926917.0482572999!2d-104.57738594649922!3d40.26036964524562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2s!4v1513784737244" />
                                            </div>
                                        </div>
                                        <div className="extra-job-info">
                                            <span><i className="la la-clock-o" /><strong>35</strong> Days</span>
                                            <span><i className="la la-search-plus" /><strong>35697</strong> Displayed</span>
                                            <span><i className="la la-file-text" /><strong>300-500</strong> Application</span>
                                        </div>
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

export default CandidatePageComponent;