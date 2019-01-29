import React, { Component } from 'react';
import Footer from '../Footer';
import Sample from '../Headers/Sample';

class CandidateFormComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="theme-layout" id="scrollup">
                    <Sample />
                    <section>
                        <div className="block remove-top">
                            <div className="container">
                                <div className="row no-gape">
                                    <div className="col-lg-2 column">

                                    </div>

                                    <div className="col-lg-8 column">
                                        <div className="padding-left">
                                            <div className="manage-jobs-sec">
                                                <div className="border-title"><h3>Personal Information</h3></div>
                                                <div className="resumeadd-form">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <span className="pf-title">Title</span>
                                                            <div className="pf-field">
                                                                <input placeholder="Tooms.." type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <span className="pf-title">From Date</span>
                                                            <div className="pf-field">
                                                                <input placeholder="06.11.2007" type="text" className="datepicker" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <span className="pf-title">To Date</span>
                                                            <div className="pf-field">
                                                                <input placeholder="06.11.2012" type="text" className="datepicker" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <span className="pf-title">Institute</span>
                                                            <div className="pf-field">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <span className="pf-title">Description</span>
                                                            <div className="pf-field">
                                                                <textarea defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <button type="submit">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-title"><h3>Work Experience</h3></div>
                                                <div className="resumeadd-form">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <span className="pf-title">Title</span>
                                                            <div className="pf-field">
                                                                <input placeholder="Tooms.." type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <span className="pf-title">From Date</span>
                                                            <div className="pf-field">
                                                                <input placeholder="06.11.2007" type="text" className="datepicker" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <span className="pf-title">To Date</span>
                                                            <div className="pf-field">
                                                                <input placeholder="06.11.2012" type="text" className="datepicker" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <p className="remember-label">
                                                                <input type="checkbox" name="cb" id="fgfg" /><label htmlFor="fgfg">Present</label>
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <span className="pf-title">Company</span>
                                                            <div className="pf-field">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <span className="pf-title">Description</span>
                                                            <div className="pf-field">
                                                                <textarea defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <button type="submit">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-title"><h3>Portfolio</h3></div>
                                                <div className="resumeadd-form">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <p>Max file size is 1MB, Minimum dimension: 270x210 And Suitable files are .jpg &amp; .png</p>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="upload-portfolio">
                                                                <div className="uploadbox">
                                                                    <label htmlFor="file-upload" className="custom-file-upload">
                                                                        <i className="la la-cloud-upload" /> <span>Upload Image</span>
                                                                    </label>
                                                                    <input id="file-upload" type="file" style={{ display: 'none' }} />
                                                                </div>
                                                                <div className="uploadfield">
                                                                    <span className="pf-title">Title</span>
                                                                    <div className="pf-field">
                                                                        <input placeholder="Tooms.." type="text" />
                                                                    </div>
                                                                </div>
                                                                <div className="uploadbutton">
                                                                    <button type="submit">Save</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-title"><h3>Professional Skills</h3></div>
                                                <div className="resumeadd-form">
                                                    <div className="row align-items-end">
                                                        <div className="col-lg-7">
                                                            <span className="pf-title">Skill Heading</span>
                                                            <div className="pf-field">
                                                                <input placeholder type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <span className="pf-title">Percentage</span>
                                                            <div className="pf-field">
                                                                <input placeholder type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <button type="submit">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-title"><h3>Awards</h3></div>
                                                <div className="resumeadd-form">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <span className="pf-title">06.11.2007</span>
                                                            <div className="pf-field">
                                                                <input placeholder type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <span className="pf-title">06.11.2012</span>
                                                            <div className="pf-field">
                                                                <input placeholder type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <span className="pf-title">Description</span>
                                                            <div className="pf-field">
                                                                <textarea defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <button type="submit">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 column">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <Footer />
                    

                </div>
            
            </div>
        );
    }
}

export default CandidateFormComponent;