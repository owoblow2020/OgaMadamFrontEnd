import React, { Component } from 'react';

class HomePaymentComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <div data-velocity="-.2" style={{ background: 'url(images/resource/parallax5.jpg) repeat scroll 50% 422.28px transparent' }} className="parallax scrolly-invisible" />{/* PARALLAX BACKGROUND IMAGE */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading">
                                <h2>Buy Our Plans And Packeges</h2>
                                <span>One of our jobs has some kind of flexibility option - such as telecommuting, a part-time schedule or a flexible or flextime schedule.</span>
                            </div>{/* Heading */}
                            <div className="plans-sec">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                        <div className="pricetable style2">
                                            <div className="pricetable-head">
                                                <h3>Basic Jobs</h3>
                                                <h2><i>$</i>10</h2>
                                                <span>15 Days</span>
                                            </div>{/* Price Table */}
                                            <ul>
                                                <li>1 job posting</li>
                                                <li>0 featured job</li>
                                                <li>Job displayed for 20 days</li>
                                                <li>Premium Support 24/7</li>
                                            </ul>
                                            <a href="#" title>BUY NOW</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                        <div className="pricetable active style2">
                                            <div className="pricetable-head">
                                                <h3>Standard Jobs</h3>
                                                <h2><i>$</i>45</h2>
                                                <span>20 Days</span>
                                            </div>{/* Price Table */}
                                            <ul>
                                                <li>11 job posting</li>
                                                <li>12 featured job</li>
                                                <li>Job displayed for 30 days</li>
                                                <li>Premium Support 24/7</li>
                                            </ul>
                                            <a href="#" title>BUY NOW</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                        <div className="pricetable style2">
                                            <div className="pricetable-head">
                                                <h3>Golden Jobs</h3>
                                                <h2><i>$</i>80</h2>
                                                <span>2 Month</span>
                                            </div>{/* Price Table */}
                                            <ul>
                                                <li>44 job posting</li>
                                                <li>56 featured job</li>
                                                <li>Job displayed for 80 days</li>
                                                <li>Premium Support 24/7</li>
                                            </ul>
                                            <a href="#" title>BUY NOW</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                        <div className="pricetable style2">
                                            <div className="pricetable-head">
                                                <h3>Golden Jobs</h3>
                                                <h2><i>$</i>80</h2>
                                                <span>2 Month</span>
                                            </div>{/* Price Table */}
                                            <ul>
                                                <li>44 job posting</li>
                                                <li>56 featured job</li>
                                                <li>Job displayed for 80 days</li>
                                                <li>Premium Support 24/7</li>
                                            </ul>
                                            <a href="#" title>BUY NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default HomePaymentComponent;