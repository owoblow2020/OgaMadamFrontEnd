import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class HomeCategoryComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <section id="scroll-here">
                    <div className="block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="heading">
                                        <h2>Popular Categories</h2>
                                        <span>37 jobs live - 0 added today.</span>
                                    </div>{/* Heading */}
                                    <div className="cat-sec">
                                        <div className="row no-gape">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                <Link to="">
                                                        <i className="la la-bullhorn" />
                                                        <span>Maids</span>
                                                        <p>(22 open positions)</p>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                <Link to="">
                                                        <i className="la la-graduation-cap" />
                                                        <span>Cooks</span>
                                                        <p>(6 open positions)</p>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                <Link to="">
                                                        <i className="la la-line-chart " />
                                                        <span>Nannies</span>
                                                        <p>(3 open positions)</p>
                                                   </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                <Link to="">
                                                        <i className="la la-users" />
                                                        <span>Cleaners</span>
                                                        <p>(3 open positions)</p>
                                                  </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cat-sec">
                                        <div className="row no-gape">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                <Link to="">
                                                        <i className="la la-phone" />
                                                        <span>Cleaning Services</span>
                                                        <p>(22 open positions)</p>
                                                   </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                <Link to="">
                                                        <i className="la la-cutlery" />
                                                        <span>Background Checks</span>
                                                        <p>(6 open positions)</p>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                <Link to="">
                                                        <i className="la la-building" />
                                                        <span>Identity Services</span>
                                                        <p>(3 open positions)</p>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                <Link to="">
                                                        <i className="la la-user-md" />
                                                        <span>Training</span>
                                                        <p>(3 open positions)</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="browse-all-cat green">
                                    <Link to="/candidate-list" className="rounded">Browse All Categories</Link>
                                     
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

export default HomeCategoryComponent;