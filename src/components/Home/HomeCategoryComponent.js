import React, { Component } from 'react';
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
                                                    <a href="#" title>
                                                        <i className="la la-bullhorn" />
                                                        <span>Design, Art &amp; Multimedia</span>
                                                        <p>(22 open positions)</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                    <a href="#" title>
                                                        <i className="la la-graduation-cap" />
                                                        <span>Education Training</span>
                                                        <p>(6 open positions)</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                    <a href="#" title>
                                                        <i className="la la-line-chart " />
                                                        <span>Accounting / Finance</span>
                                                        <p>(3 open positions)</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                    <a href="#" title>
                                                        <i className="la la-users" />
                                                        <span>Human Resource</span>
                                                        <p>(3 open positions)</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cat-sec">
                                        <div className="row no-gape">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                    <a href="#" title>
                                                        <i className="la la-phone" />
                                                        <span>Telecommunications</span>
                                                        <p>(22 open positions)</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                    <a href="#" title>
                                                        <i className="la la-cutlery" />
                                                        <span>Restaurant / Food Service</span>
                                                        <p>(6 open positions)</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                    <a href="#" title>
                                                        <i className="la la-building" />
                                                        <span>Construction / Facilities</span>
                                                        <p>(3 open positions)</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                <div className="p-category green">
                                                    <a href="#" title>
                                                        <i className="la la-user-md" />
                                                        <span>Health</span>
                                                        <p>(3 open positions)</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="browse-all-cat green">
                                        <a href="#" title className="rounded">Browse All Categories</a>
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