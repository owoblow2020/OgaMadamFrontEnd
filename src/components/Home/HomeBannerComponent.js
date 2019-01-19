import React, { Component } from 'react';

class HomeBannerComponent extends Component {
    state = {}
    render() {
        return (
            <section>
                <div className="block no-padding">
                    <div className="container fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="find-cand-sec">
                                    <div className="iconmove"><img className="animute" src="images/resource/iconmove.jpg" alt /></div>
                                    <div className="mockup-top"><img className="animute" src="images/job4.png" alt /></div>
                                    <div className="mockup-bottom"><img src="images/job3.png" alt="" width="689" height="528" /></div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="find-cand">
                                                    <h3>Find Workers</h3>
                                                    <span>We have 2.567 resumes in our database</span>
                                                    <form>
                                                        <div className="job-field">
                                                            <input type="text" placeholder="Search workers (e.g. Cleaners)" />
                                                        </div>
                                                        <div className="job-field">
                                                            {/* <select data-placeholder="City, province or region" className="chosen-city">
                                                            <option>Mechanic</option>
                                                            <option>Web Development</option>
                                                            <option>Car Install</option>
                                                            <option>Shoes Slippers</option>
                                                        </select> */}
                                                            <input type="text" placeholder="Enter location (e.g. Abuja)" />
                                                        </div>
                                                        <button type="submit"><i className="la la-search" /></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="scroll-to style2">
                                    <a href="#scroll-here" title><i className="la la-arrow-down" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeBannerComponent;