import React, { Component } from 'react';
import HomeSignInComponent from '../Home/HomeSignInComponent';
import HomeSignUpComponent from '../Home/HomeSignUpComponent';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Sample from '../Headers/Sample';
import { connect } from 'react-redux';
import CandidateListRow from './CandidateListRow';
import { listCategory } from '../../actions';

class CandidateListComponenet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: []
    }

    this.onChange = this.onChange.bind(this);
    this.onCheckBox = this.onCheckBox.bind(this);
  }

  componentDidMount() {
    this.props.onListCategory();
    this.setState({
      categoryList: this.props.result
    })
  }

  onCheckBox(e) {
    let search = e.target.value;
    let data = [];
    if (e.target.name === 'checkbox') {
      console.log(search);
      data = this.props.result.filter(item => item.CategoryName === search)

    }
    this.setState({ categoryList: data });

    if (e.target.checked === false) {
      this.setState({ categoryList: this.props.result });
    }
  }

  onChange(e) {

    let search = e.target.value;
    let data = [];
    if (e.target.name === 'location') {
      data = this.props.result.filter(item => item.StateOfOrigin === search)
    } else {
      data = this.props.result.filter(item => item.FirstName === search
        || item.CategoryName === search || item.LastName === search || item.Sex === search)
     
    }
    this.setState({ categoryList: data });

    if (search === '') {
      this.setState({ categoryList: this.props.result });
    }
  }

  render() {
    return (
      <div>
        <div className="theme-layout" id="scrollup">
          <Sample />
          <section>
            <div className="block no-padding">
              <div className="container">
                <div className="row no-gape">
                  <aside className="col-lg-4 column border-right">
                    <div className="widget">
                      <div className="search_widget_job">
                        <div className="field_w_search">
                          <input type="text" name="search" ref={btn => { this.btn = btn; }} onChange={this.onChange} placeholder="Search Keywords" />
                          <i className="la la-search" />
                        </div>{/* Search Widget */}
                        <div className="field_w_search">
                          <input type="text" name="location" onChange={this.onChange} placeholder="All Locations" />
                          <i className="la la-map-marker" />
                        </div>{/* Search Widget */}
                      </div>
                    </div>
                    <div className="widget">
                      <h3 className="sb-title open">Category</h3>
                      <div className="specialism_widget">
                        {
                          this.props.cat.map(item =>
                            <div className="simple-checkbox" key={item.CategoryId}>
                              <p><input type="checkbox" onChange={this.onCheckBox} name="checkbox" value={item.Title} id="as" />
                                <label htmlFor="as">{item.Title} ({item.numberOfWorkers})</label>
                              </p>
                            </div>
                          )
                        }
                      </div>
                    </div>

                  </aside>
                  <div className="col-lg-8 column">
                    <div className="emply-list-sec">
                      {this.state.categoryList.map(item =>
                        <CandidateListRow key={item.EmployeeId} info={item} />
                      )}
                      <div className="pagination">
                        <ul>
                          <li className="prev"><Link to=""><i className="la la-long-arrow-left" /> Prev</Link></li>
                          <li><Link to="">1</Link></li>
                          <li className="active"><Link to="">2</Link></li>
                          <li><Link to="">3</Link></li>
                          <li><span className="delimeter">...</span></li>
                          <li><Link to="">14</Link></li>
                          <li className="next"><Link to="">Next <i className="la la-long-arrow-right" /></Link></li>
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

const mapStateToProps = (state) => {
  return {
    result: state.SearchReducer.param,
    cat: state.CategoryReducer.cat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onListCategory: () => {
      dispatch(listCategory());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateListComponenet);