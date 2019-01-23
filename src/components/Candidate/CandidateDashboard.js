import React, { Component } from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import {Link} from 'react-router-dom';

class CandidateDashboard extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="theme-layout" id="scrollup">
                    <Menu /> 
                    <section>
                        <div className="block no-padding">
                            <div className="container">
                                <div className="row no-gape">
                                    <aside className="col-lg-3 column border-right">
                                        <div className="widget">
                                            <div className="tree_widget-sec">
                                                <ul>
                                                    <li className="inner-child">
                                                        <Link to=""><i className="la la-file-text" />Company Profile</Link>
                                                        <ul>
                                                            <ol><Link to="">My Profile</Link></ol>
                                                            <ol><Link to="">Social Network</Link></ol>
                                                            <ol><Link to="">Contact Information</Link></ol>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <Link to=""><i className="la la-briefcase" />Manage Jobs</Link>
                                                        <ul>
                                                            <li><Link to="">My Profile</Link></li>
                                                            <li><Link to="">Social Network</Link></li>
                                                            <li><Link to="">Contact Information</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <Link to=""><i className="la la-money" />Transactions</Link>
                                                        <ul>
                                                            <li><Link to="">My Profile</Link></li>
                                                            <li><Link to="">Social Network</Link></li>
                                                            <li><Link to="">Contact Information</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <Link to=""><i className="la la-paper-plane" />Resumes</Link>
                                                        <ul>
                                                            <li><Link to="">My Profile</Link></li>
                                                            <li><Link to="">Social Network</Link></li>
                                                            <li><Link to="">Contact Information</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <Link to=""><i className="la la-user" />Packages</Link>
                                                        <ul>
                                                            <li><Link to="">My Profile</Link></li>
                                                            <li><Link to="">Social Network</Link></li>
                                                            <li><Link to="">Contact Information</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <Link to=""><i className="la la-file-text" />Post a New Job</Link>
                                                        <ul>
                                                            <li><Link to="">My Profile</Link></li>
                                                            <li><Link to="">Social Network</Link></li>
                                                            <li><Link to="">Contact Information</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <Link to=""><i className="la la-flash" />Job Alerts</Link>
                                                        <ul>
                                                            <li><Link to="">My Profile</Link></li>
                                                            <li><Link to="">Social Network</Link></li>
                                                            <li><Link to="">Contact Information</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <Link to=""><i className="la la-lock" />Change Password</Link>
                                                        <ul>
                                                            <li><Link to="">My Profile</Link></li>
                                                            <li><Link to="">Social Network</Link></li>
                                                            <li><Link to="">Contact Information</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link to=""><i className="la la-unlink" />Logout</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="widget">
                                            <div className="skill-perc">
                                              
                                            </div>
                                        </div>
                                    </aside>
                                    <div className="col-lg-9 column">
                                        <div className="padding-left">
                                            <div className="manage-jobs-sec">
                                                <h3>Candidates Dashboard</h3>
                                                <div className="cat-sec">
                                                    <div className="row no-gape">
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category">
                                                            <Link to="">
                                                                    <i className="la la-briefcase" />
                                                                    <span>Applied Job</span>
                                                                    <p>14 Applications</p>
                                                               </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category view-resume-list">
                                                                <Link to="">
                                                                    <i className="la la-eye" />
                                                                    <span>View Resume</span>
                                                                    <p>22 View Statistic</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category">
                                                                <Link to="">
                                                                    <i className="la la-file-text " />
                                                                    <span>My Resume</span>
                                                                    <p>Create New Resume</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cat-sec">
                                                    <div className="row no-gape">
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category">
                                                                <Link to="">
                                                                    <i className="la la-check" />
                                                                    <span>Appropriate For Me</span>
                                                                    <p>(05 Jobs)</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category follow-companies-popup">
                                                                <Link to="">
                                                                    <i className="la la-user" />
                                                                    <span>Follow Companies</span>
                                                                    <p>56 Companies</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category">
                                                                <Link to="">
                                                                    <i className="la la-file" />
                                                                    <span>My Profile</span>
                                                                    <p>View Profile</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
                <div className="profile-sidebar">
                    <span className="close-profile"><i className="la la-close" /></span>
                    <div className="can-detail-s">
                        <div className="cst"><img src="http://placehold.it/145x145" alt="" /></div>
                        <h3>David CARLOS</h3>
                        <span><i>UX / UI Designer</i> at Atract Solutions</span>
                        <p>creativelayers088@gmail.com</p>
                        <p>Member Since, 2017</p>
                        <p><i className="la la-map-marker" />Istanbul / Turkey</p>
                    </div>
                    <div className="tree_widget-sec">
                        <ul>
                            <li className="inner-child active">
                                <Link to=""><i className="la la-file-text" />My Profile</Link>
                                <ul style={{ display: 'block' }}>
                                    <li><Link to="">My Profile</Link></li>
                                    <li><Link to="">Social Network</Link></li>
                                    <li><Link to="">Contact Information</Link></li>
                                </ul>
                            </li>
                            <li className="inner-child">
                                <Link to=""><i className="la la-briefcase" />My Resume</Link>
                                <ul>
                                    <li><Link to="">Education</Link></li>
                                    <li><Link to="">Work Experience</Link></li>
                                    <li><Link to="">Portfolio</Link></li>
                                    <li><Link to="">Professional Skills</Link></li>
                                    <li><Link to="">Awards</Link></li>
                                </ul>
                            </li>
                            <li className="inner-child">
                                <Link to=""><i className="la la-money" />Shorlisted Job</Link>
                                <ul>
                                    <li><Link to="">My Profile</Link></li>
                                    <li><Link to="">Social Network</Link></li>
                                    <li><Link to="">Contact Information</Link></li>
                                </ul>
                            </li>
                            <li className="inner-child">
                                <Link to=""><i className="la la-paper-plane" />Applied Job</Link>
                                <ul>
                                    <li><Link to="">My Profile</Link></li>
                                    <li><Link to="">Social Network</Link></li>
                                    <li><Link to="">Contact Information</Link></li>
                                </ul>
                            </li>
                            <li className="inner-child">
                                <Link to=""><i className="la la-user" />Job Alerts</Link>
                                <ul>
                                    <li><Link to="">My Profile</Link></li>
                                    <li><Link to="">Social Network</Link></li>
                                    <li><Link to="">Contact Information</Link></li>
                                </ul>
                            </li>
                            <li className="inner-child">
                                <Link to=""><i className="la la-file-text" />Cv &amp; Cover Letter</Link>
                                <ul>
                                    <li><Link to="">My Profile</Link></li>
                                    <li><Link to="">Social Network</Link></li>
                                    <li><Link to="">Contact Information</Link></li>
                                </ul>
                            </li>
                            <li className="inner-child">
                                <Link to=""><i className="la la-flash" />Change Password</Link>
                                <ul>
                                    <li><Link to="">My Profile</Link></li>
                                    <li><Link to="">Social Network</Link></li>
                                    <li><Link to="">Contact Information</Link></li>
                                </ul>
                            </li>
                            <li><Link to=""><i className="la la-unlink" />Logout</Link></li>
                        </ul>
                    </div>
                </div>{/* Profile Sidebar */}
                <div className="view-resumesec">
                    <div className="view-resumes">
                        <span className="close-resume-popup"><i className="la la-close" /></span>
                        <h3>13 Times Viewed By 8 Companies.</h3>
                        <div className="job-listing wtabs">
                            <div className="job-title-sec">
                                <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                <h3><Link to="">Web Designer / Developer</Link></h3>
                                <span>Massimo Artemisis</span>
                                <div className="job-lctn">Sacramento, California</div>
                            </div>
                            <span className="date-resume">11.02.2017</span>
                        </div>{/* Job */}
                        <div className="job-listing wtabs">
                            <div className="job-title-sec">
                                <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                <h3><Link to="">C Developer (Senior) C .Net</Link></h3>
                                <span>Massimo Artemisis</span>
                                <div className="job-lctn"><i className="la la-map-marker" />Sacramento, California</div>
                            </div>
                            <span className="date-resume">11.02.2017</span>
                        </div>{/* Job */}
                        <div className="job-listing wtabs">
                            <div className="job-title-sec">
                                <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                <h3><Link to="">Web Designer / Developer</Link></h3>
                                <span>Massimo Artemisis</span>
                                <div className="job-lctn">Sacramento, California</div>
                            </div>
                            <span className="date-resume">11.02.2017</span>
                        </div>{/* Job */}
                        <div className="job-listing wtabs">
                            <div className="job-title-sec">
                                <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                <h3><Link to="">Web Designer / Developer</Link></h3>
                                <span>Massimo Artemisis</span>
                                <div className="job-lctn">Sacramento, California</div>
                            </div>
                            <span className="date-resume">11.02.2017</span>
                        </div>{/* Job */}
                    </div>
                </div>
                <div className="follow-companiesec">
                    <div className="follow-companies">
                        <span className="close-follow-company"><i className="la la-close" /></span>
                        <h3>Follow Companies.</h3>
                        <ul id="scrollbar">
                            <li>
                                <div className="job-listing wtabs">
                                    <div className="job-title-sec">
                                        <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                        <h3><Link to="">Web Designer / Developer</Link></h3>
                                        <div className="job-lctn">Sacramento, California</div>
                                    </div>
                                    <Link to="" className="go-unfollow">Unfollow</Link>
                                </div>{/* Job */}
                            </li>
                            <li>
                                <div className="job-listing wtabs">
                                    <div className="job-title-sec">
                                        <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                        <h3><Link to="">Tix Dog</Link></h3>
                                        <div className="job-lctn">Sacramento, California</div>
                                    </div>
                                    <Link title className="go-unfollow" to="">Unfollow</Link>
                                </div>{/* Job */}
                            </li>
                            <li>
                                <div className="job-listing wtabs">
                                    <div className="job-title-sec">
                                        <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                        <h3><Link to="">StarHealth</Link></h3>
                                        <div className="job-lctn">Sacramento, California</div>
                                    </div>
                                    <Link to="" className="go-unfollow">Unfollow</Link>
                                </div>{/* Job */}
                            </li>
                            <li>
                                <div className="job-listing wtabs">
                                    <div className="job-title-sec">
                                        <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                        <h3><Link to="">Altes Bank</Link></h3>
                                        <div className="job-lctn">Sacramento, California</div>
                                    </div>
                                    <Link to="" className="go-unfollow">Unfollow</Link>
                                </div>{/* Job */}
                            </li>
                            <li>
                                <div className="job-listing wtabs">
                                    <div className="job-title-sec">
                                        <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                        <h3><Link to="">StarHealth</Link></h3>
                                        <div className="job-lctn">Sacramento, California</div>
                                    </div>
                                    <Link to="" className="go-unfollow">Unfollow</Link>
                                </div>{/* Job */}
                            </li>
                            <li>
                                <div className="job-listing wtabs">
                                    <div className="job-title-sec">
                                        <div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
                                        <h3><Link to="">Altes Bank</Link></h3>
                                        <div className="job-lctn">Sacramento, California</div>
                                    </div>
                                    <Link to="" className="go-unfollow">Unfollow</Link>
                                </div>{/* Job */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CandidateDashboard;