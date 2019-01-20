import React, { Component } from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

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
                                                        <a href="#" title><i className="la la-file-text" />Company Profile</a>
                                                        <ul>
                                                            <ol><a href="#" title>My Profile</a></ol>
                                                            <ol><a href="#" title>Social Network</a></ol>
                                                            <ol><a href="#" title>Contact Information</a></ol>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <a href="#" title><i className="la la-briefcase" />Manage Jobs</a>
                                                        <ul>
                                                            <li><a href="#" title>My Profile</a></li>
                                                            <li><a href="#" title>Social Network</a></li>
                                                            <li><a href="#" title>Contact Information</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <a href="#" title><i className="la la-money" />Transactions</a>
                                                        <ul>
                                                            <li><a href="#" title>My Profile</a></li>
                                                            <li><a href="#" title>Social Network</a></li>
                                                            <li><a href="#" title>Contact Information</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <a href="#" title><i className="la la-paper-plane" />Resumes</a>
                                                        <ul>
                                                            <li><a href="#" title>My Profile</a></li>
                                                            <li><a href="#" title>Social Network</a></li>
                                                            <li><a href="#" title>Contact Information</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <a href="#" title><i className="la la-user" />Packages</a>
                                                        <ul>
                                                            <li><a href="#" title>My Profile</a></li>
                                                            <li><a href="#" title>Social Network</a></li>
                                                            <li><a href="#" title>Contact Information</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <a href="#" title><i className="la la-file-text" />Post a New Job</a>
                                                        <ul>
                                                            <li><a href="#" title>My Profile</a></li>
                                                            <li><a href="#" title>Social Network</a></li>
                                                            <li><a href="#" title>Contact Information</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <a href="#" title><i className="la la-flash" />Job Alerts</a>
                                                        <ul>
                                                            <li><a href="#" title>My Profile</a></li>
                                                            <li><a href="#" title>Social Network</a></li>
                                                            <li><a href="#" title>Contact Information</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="inner-child">
                                                        <a href="#" title><i className="la la-lock" />Change Password</a>
                                                        <ul>
                                                            <li><a href="#" title>My Profile</a></li>
                                                            <li><a href="#" title>Social Network</a></li>
                                                            <li><a href="#" title>Contact Information</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#" title><i className="la la-unlink" />Logout</a></li>
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
                                                                <a href="#" title>
                                                                    <i className="la la-briefcase" />
                                                                    <span>Applied Job</span>
                                                                    <p>14 Applications</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category view-resume-list">
                                                                <a href="#" title>
                                                                    <i className="la la-eye" />
                                                                    <span>View Resume</span>
                                                                    <p>22 View Statistic</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category">
                                                                <a href="#" title>
                                                                    <i className="la la-file-text " />
                                                                    <span>My Resume</span>
                                                                    <p>Create New Resume</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cat-sec">
                                                    <div className="row no-gape">
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category">
                                                                <a href="#" title>
                                                                    <i className="la la-check" />
                                                                    <span>Appropriate For Me</span>
                                                                    <p>(05 Jobs)</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category follow-companies-popup">
                                                                <a href="#" title>
                                                                    <i className="la la-user" />
                                                                    <span>Follow Companies</span>
                                                                    <p>56 Companies</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category">
                                                                <a href="#" title>
                                                                    <i className="la la-file" />
                                                                    <span>My Profile</span>
                                                                    <p>View Profile</p>
                                                                </a>
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
                        <div className="cst"><img src="http://placehold.it/145x145" alt /></div>
                        <h3>David CARLOS</h3>
                        <span><i>UX / UI Designer</i> at Atract Solutions</span>
                        <p>creativelayers088@gmail.com</p>
                        <p>Member Since, 2017</p>
                        <p><i className="la la-map-marker" />Istanbul / Turkey</p>
                    </div>
                    <div className="tree_widget-sec">
                        <ul>
                            <li className="inner-child active">
                                <a href="#" title><i className="la la-file-text" />My Profile</a>
                                <ul style={{ display: 'block' }}>
                                    <li><a href="#" title>My Profile</a></li>
                                    <li><a href="#" title>Social Network</a></li>
                                    <li><a href="#" title>Contact Information</a></li>
                                </ul>
                            </li>
                            <li className="inner-child">
                                <a href="#" title><i className="la la-briefcase" />My Resume</a>
                                <ul>
                                    <li><a href="#" title>Education</a></li>
                                    <li><a href="#" title>Work Experience</a></li>
                                    <li><a href="#" title>Portfolio</a></li>
                                    <li><a href="#" title>Professional Skills</a></li>
                                    <li><a href="#" title>Awards</a></li>
                                </ul>
                            </li>
                            <li className="inner-child">
                                <a href="#" title><i className="la la-money" />Shorlisted Job</a>
                                <ul>
                                    <li><a href="#" title>My Profile</a></li>
                                    <li><a href="#" title>Social Network</a></li>
                                    <li><a href="#" title>Contact Information</a></li>
                                </ul>
                            </li>
                            <li className="inner-child">
                                <a href="#" title><i className="la la-paper-plane" />Applied Job</a>
                                <ul>
                                    <li><a href="#" title>My Profile</a></li>
                                    <li><a href="#" title>Social Network</a></li>
                                    <li><a href="#" title>Contact Information</a></li>
                                </ul>
                            </li>
                            <li className="inner-child">
                                <a href="#" title><i className="la la-user" />Job Alerts</a>
                                <ul>
                                    <li><a href="#" title>My Profile</a></li>
                                    <li><a href="#" title>Social Network</a></li>
                                    <li><a href="#" title>Contact Information</a></li>
                                </ul>
                            </li>
                            <li className="inner-child">
                                <a href="#" title><i className="la la-file-text" />Cv &amp; Cover Letter</a>
                                <ul>
                                    <li><a href="#" title>My Profile</a></li>
                                    <li><a href="#" title>Social Network</a></li>
                                    <li><a href="#" title>Contact Information</a></li>
                                </ul>
                            </li>
                            <li className="inner-child">
                                <a href="#" title><i className="la la-flash" />Change Password</a>
                                <ul>
                                    <li><a href="#" title>My Profile</a></li>
                                    <li><a href="#" title>Social Network</a></li>
                                    <li><a href="#" title>Contact Information</a></li>
                                </ul>
                            </li>
                            <li><a href="#" title><i className="la la-unlink" />Logout</a></li>
                        </ul>
                    </div>
                </div>{/* Profile Sidebar */}
                <div className="view-resumesec">
                    <div className="view-resumes">
                        <span className="close-resume-popup"><i className="la la-close" /></span>
                        <h3>13 Times Viewed By 8 Companies.</h3>
                        <div className="job-listing wtabs">
                            <div className="job-title-sec">
                                <div className="c-logo"> <img src="http://placehold.it/98x51" alt /> </div>
                                <h3><a href="#" title>Web Designer / Developer</a></h3>
                                <span>Massimo Artemisis</span>
                                <div className="job-lctn">Sacramento, California</div>
                            </div>
                            <span className="date-resume">11.02.2017</span>
                        </div>{/* Job */}
                        <div className="job-listing wtabs">
                            <div className="job-title-sec">
                                <div className="c-logo"> <img src="http://placehold.it/98x51" alt /> </div>
                                <h3><a href="#" title>C Developer (Senior) C .Net</a></h3>
                                <span>Massimo Artemisis</span>
                                <div className="job-lctn"><i className="la la-map-marker" />Sacramento, California</div>
                            </div>
                            <span className="date-resume">11.02.2017</span>
                        </div>{/* Job */}
                        <div className="job-listing wtabs">
                            <div className="job-title-sec">
                                <div className="c-logo"> <img src="http://placehold.it/98x51" alt /> </div>
                                <h3><a href="#" title>Web Designer / Developer</a></h3>
                                <span>Massimo Artemisis</span>
                                <div className="job-lctn">Sacramento, California</div>
                            </div>
                            <span className="date-resume">11.02.2017</span>
                        </div>{/* Job */}
                        <div className="job-listing wtabs">
                            <div className="job-title-sec">
                                <div className="c-logo"> <img src="http://placehold.it/98x51" alt /> </div>
                                <h3><a href="#" title>Web Designer / Developer</a></h3>
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
                                        <div className="c-logo"> <img src="http://placehold.it/98x51" alt /> </div>
                                        <h3><a href="#" title>Web Designer / Developer</a></h3>
                                        <div className="job-lctn">Sacramento, California</div>
                                    </div>
                                    <a href="#" title className="go-unfollow">Unfollow</a>
                                </div>{/* Job */}
                            </li>
                            <li>
                                <div className="job-listing wtabs">
                                    <div className="job-title-sec">
                                        <div className="c-logo"> <img src="http://placehold.it/98x51" alt /> </div>
                                        <h3><a href="#" title>Tix Dog</a></h3>
                                        <div className="job-lctn">Sacramento, California</div>
                                    </div>
                                    <a href="#" title className="go-unfollow">Unfollow</a>
                                </div>{/* Job */}
                            </li>
                            <li>
                                <div className="job-listing wtabs">
                                    <div className="job-title-sec">
                                        <div className="c-logo"> <img src="http://placehold.it/98x51" alt /> </div>
                                        <h3><a href="#" title>StarHealth</a></h3>
                                        <div className="job-lctn">Sacramento, California</div>
                                    </div>
                                    <a href="#" title className="go-unfollow">Unfollow</a>
                                </div>{/* Job */}
                            </li>
                            <li>
                                <div className="job-listing wtabs">
                                    <div className="job-title-sec">
                                        <div className="c-logo"> <img src="http://placehold.it/98x51" alt /> </div>
                                        <h3><a href="#" title>Altes Bank</a></h3>
                                        <div className="job-lctn">Sacramento, California</div>
                                    </div>
                                    <a href="#" title className="go-unfollow">Unfollow</a>
                                </div>{/* Job */}
                            </li>
                            <li>
                                <div className="job-listing wtabs">
                                    <div className="job-title-sec">
                                        <div className="c-logo"> <img src="http://placehold.it/98x51" alt /> </div>
                                        <h3><a href="#" title>StarHealth</a></h3>
                                        <div className="job-lctn">Sacramento, California</div>
                                    </div>
                                    <a href="#" title className="go-unfollow">Unfollow</a>
                                </div>{/* Job */}
                            </li>
                            <li>
                                <div className="job-listing wtabs">
                                    <div className="job-title-sec">
                                        <div className="c-logo"> <img src="http://placehold.it/98x51" alt /> </div>
                                        <h3><a href="#" title>Altes Bank</a></h3>
                                        <div className="job-lctn">Sacramento, California</div>
                                    </div>
                                    <a href="#" title className="go-unfollow">Unfollow</a>
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