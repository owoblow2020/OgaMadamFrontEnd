import React, { Component } from 'react';
import Menu from '../Menu';
import HomeSignInComponent from '../Home/HomeSignInComponent';
import HomeSignUpComponent from '../Home/HomeSignUpComponent';
import Footer from '../Footer';

class CandidateListComponenet extends Component {
    state = {  }
    render() {
        return (
          <div>
            <div className="theme-layout" id="scrollup">
                <Menu />
              <section>
                <div className="block no-padding">
                  <div className="container">
                    <div className="row no-gape">
                      <aside className="col-lg-4 column border-right">
                        <div className="widget">
                          <div className="search_widget_job">
                            <div className="field_w_search">
                              <input type="text" placeholder="Search Keywords" />
                              <i className="la la-search" />
                            </div>{/* Search Widget */}
                            <div className="field_w_search">
                              <input type="text" placeholder="All Locations" />
                              <i className="la la-map-marker" />
                            </div>{/* Search Widget */}
                          </div>
                        </div>
                        <div className="widget">
                          <h3 className="sb-title open">Specialism</h3>
                          <div className="specialism_widget">
                            <div className="simple-checkbox">
                              <p><input type="checkbox" name="spealism" id="as" /><label htmlFor="as">Accountancy (2)</label></p>
                              <p><input type="checkbox" name="spealism" id="asd" /><label htmlFor="asd">Banking (2)</label></p>
                              <p><input type="checkbox" name="spealism" id="errwe" /><label htmlFor="errwe">Charity &amp; Voluntary (3)</label></p>
                              <p><input type="checkbox" name="spealism" id="fdg" /><label htmlFor="fdg">Digital &amp; Creative (4)</label></p>
                              <p><input type="checkbox" name="spealism" id="sc" /><label htmlFor="sc">Estate Agency (3)</label></p>
                              <p><input type="checkbox" name="spealism" id="aw" /><label htmlFor="aw">Graduate (2)</label></p>
                              <p><input type="checkbox" name="spealism" id="ui" /><label htmlFor="ui">IT Contractor (7)</label></p>
                            </div>
                          </div>
                        </div>

                      </aside>
                      <div className="col-lg-8 column">
                        <div className="emply-list-sec">
                          <div className="emply-list">
                            <div className="emply-list-thumb">
                              <a href="#" title><img src="http://placehold.it/80x80" alt /></a>
                            </div>
                            <div className="emply-list-info">
                              <div className="emply-pstn">4 Open Position</div>
                              <h3><a href="#" title>King LLC</a></h3>
                              <span>Accountancy, Human Resources</span>
                              <h6><i className="la la-map-marker" /> Toronto, Ontario</h6>
                              <p>The Heavy Equipment / Grader Operator  is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…</p>
                            </div>
                          </div>{/* Employe List */}
                          <div className="emply-list">
                            <div className="emply-list-thumb">
                              <a href="#" title><img src="http://placehold.it/80x80" alt /></a>
                            </div>
                            <div className="emply-list-info">
                              <div className="emply-pstn">4 Open Position</div>
                              <h3><a href="#" title>Telimed</a></h3>
                              <span>Accounting Assistant, Arts, Design, and Media</span>
                              <h6><i className="la la-map-marker" /> Toronto, Ontario</h6>
                              <p>The Heavy Equipment / Grader Operator  is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…</p>
                            </div>
                          </div>{/* Employe List */}
                          <div className="emply-list">
                            <div className="emply-list-thumb">
                              <a href="#" title><img src="http://placehold.it/80x80" alt /></a>
                            </div>
                            <div className="emply-list-info">
                              <div className="emply-pstn">4 Open Position</div>
                              <h3><a href="#" title>Ucess</a></h3>
                              <span>Arts, Design, and Media, Web Developer</span>
                              <h6><i className="la la-map-marker" /> Toronto, Ontario</h6>
                              <p>The Heavy Equipment / Grader Operator  is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…</p>
                            </div>
                          </div>{/* Employe List */}
                          <div className="emply-list">
                            <div className="emply-list-thumb">
                              <a href="#" title><img src="http://placehold.it/80x80" alt /></a>
                            </div>
                            <div className="emply-list-info">
                              <div className="emply-pstn">4 Open Position</div>
                              <h3><a href="#" title>Airbnb</a></h3>
                              <span>Arts, Design, and Media</span>
                              <h6><i className="la la-map-marker" /> Toronto, Ontario</h6>
                              <p>The Heavy Equipment / Grader Operator  is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…</p>
                            </div>
                          </div>{/* Employe List */}
                          <div className="emply-list">
                            <div className="emply-list-thumb">
                              <a href="#" title><img src="http://placehold.it/80x80" alt /></a>
                            </div>
                            <div className="emply-list-info">
                              <div className="emply-pstn">4 Open Position</div>
                              <h3><a href="#" title>TeraPlaner</a></h3>
                              <span>Financial Services, Sales &amp; Marketing</span>
                              <h6><i className="la la-map-marker" /> Toronto, Ontario</h6>
                              <p>The Heavy Equipment / Grader Operator  is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…</p>
                            </div>
                          </div>{/* Employe List */}
                          <div className="emply-list">
                            <div className="emply-list-thumb">
                              <a href="#" title><img src="http://placehold.it/80x80" alt /></a>
                            </div>
                            <div className="emply-list-info">
                              <div className="emply-pstn">4 Open Position</div>
                              <h3><a href="#" title>King LLC</a></h3>
                              <span>Accountancy, Human Resources</span>
                              <h6><i className="la la-map-marker" /> Toronto, Ontario</h6>
                              <p>The Heavy Equipment / Grader Operator  is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…</p>
                            </div>
                          </div>{/* Employe List */}
                          <div className="emply-list">
                            <div className="emply-list-thumb">
                              <a href="#" title><img src="http://placehold.it/80x80" alt /></a>
                            </div>
                            <div className="emply-list-info">
                              <div className="emply-pstn">4 Open Position</div>
                              <h3><a href="#" title>King LLC</a></h3>
                              <span>Accountancy, Human Resources</span>
                              <h6><i className="la la-map-marker" /> Toronto, Ontario</h6>
                              <p>The Heavy Equipment / Grader Operator  is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…</p>
                            </div>
                          </div>{/* Employe List */}
                          <div className="pagination">
                            <ul>
                              <li className="prev"><a href><i className="la la-long-arrow-left" /> Prev</a></li>
                              <li><a href>1</a></li>
                              <li className="active"><a href>2</a></li>
                              <li><a href>3</a></li>
                              <li><span className="delimeter">...</span></li>
                              <li><a href>14</a></li>
                              <li className="next"><a href>Next <i className="la la-long-arrow-right" /></a></li>
                            </ul>
                          </div>{/* Pagination */}
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

export default CandidateListComponenet;