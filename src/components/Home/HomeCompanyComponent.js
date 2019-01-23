import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class HomeCompanyComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <section>
                    <div className="block gray">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="heading">
                                        <h2>Top Company Registered</h2>
                                        <span>Some of the companies we've helped recruit excellent applicants over the years.</span>
                                    </div>{/* Heading */}
                                    <div className="top-company-sec">
                                        <div className="row" id="companies-carousel">
                                            <div className="col-lg-3">
                                                <div className="top-compnay style2">
                                                    <img src="http://placehold.it/180x180" alt="" />
                                                    <h3><Link to="">Symtech</Link></h3>
                                                    <span>United States, Los Angeles</span>
                                                    <Link to="">4 Open Positon</Link>
                                                </div>{/* Top Company */}
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="top-compnay style2">
                                                    <img src="http://placehold.it/180x180" alt="" />
                                                    <h3><Link to="">Symtech</Link></h3>
                                                    <span>United States, Los Angeles</span>
                                                    <Link to="">4 Open Positon</Link>
                                                </div>{/* Top Company */}
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="top-compnay style2">
                                                    <img src="http://placehold.it/180x180" alt="" />
                                                    <h3><Link to="">Symtech</Link></h3>
                                                    <span>United States, Los Angeles</span>
                                                    <Link to="">4 Open Positon</Link>
                                                </div>{/* Top Company */}
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="top-compnay style2">
                                                    <img src="http://placehold.it/180x180" alt="" />
                                                    <h3><Link to="">Symtech</Link></h3>
                                                    <span>United States, Los Angeles</span>
                                                    <Link to="">4 Open Positon</Link>
                                                </div>{/* Top Company */}
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="top-compnay style2">
                                                    <img src="http://placehold.it/180x180" alt="" />
                                                    <h3><Link to="">Symtech</Link></h3>
                                                    <span>United States, Los Angeles</span>
                                                    <Link to="">4 Open Positon</Link>
                                                </div>{/* Top Company */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="block">
                        <div data-velocity="-.3" style={{ background: 'url(images/resource/parallax6.jpg) repeat scroll 50% 422.28px transparent' }} className="parallax scrolly-invisible" />{/* PARALLAX BACKGROUND IMAGE */}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="heading">
                                        <h2>Kind Words From Happy Candidates</h2>
                                        <span>What other people thought about the service provided by JobHunt</span>
                                    </div>{/* Heading */}
                                    <div className="reviews-sec" id="reviews">
                                        <div className="col-lg-12">
                                            <div className="reviews style2">
                                                <img src="http://placehold.it/101x101" alt="" />
                                                <h3>Augusta Silva <span>Web designer</span></h3>
                                                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service level that they offer!</p>
                                            </div>{/* Reviews */}
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="reviews style2">
                                                <img src="http://placehold.it/101x101" alt="" />
                                                <h3>Ali Tufan <span>Web designer</span></h3>
                                                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service level that they offer!</p>
                                            </div>{/* Reviews */}
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="reviews style2">
                                                <img src="http://placehold.it/101x101" alt="" />
                                                <h3>Augusta Silva <span>Web designer</span></h3>
                                                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service level that they offer!</p>
                                            </div>{/* Reviews */}
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="reviews style2">
                                                <img src="http://placehold.it/101x101" alt="" />
                                                <h3>Ali Tufan <span>Web designer</span></h3>
                                                <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service level that they offer!</p>
                                            </div>{/* Reviews */}
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

export default HomeCompanyComponent;