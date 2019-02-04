import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { homeSearchWorker } from '../../actions';

class HomeBannerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            location: "",
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onHomeSearch({category:this.state.category, location:this.state.location});
        if(this.props.result.length > 0){
            this.props.history.push('/candidate-list');
        }
        
    }

    render() {
        return (
            <section>
                <div className="block no-padding">
                    <div className="container fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="find-cand-sec">
                                    <div className="iconmove"><img className="animute" src="images/resource/iconmove.jpg" alt="true" /></div>
                                    <div className="mockup-top"><img className="animute" src="images/job4.png" alt="true" /></div>
                                    <div className="mockup-bottom"><img src="images/job3.png" alt="true" width="689" height="528" /></div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="find-cand">
                                                    <h3>Find Workers</h3>
                                                    <span>We have 2.567 resumes in our database</span>
                                                    <form onSubmit={this.onSubmit}>
                                                        <div className="job-field">
                                                            <input type="text" value={this.state.category} onChange={this.onChange} name="category" placeholder="Search workers (e.g. Cleaners)" />
                                                        </div>
                                                                <div className="job-field">
                                                                    <select name="qualification" onChange={this.onChange} style={selectField} required data-placeholder="Select sex type" className="chosen-container chosen">
                                                                        <option>Select Location</option>
                                                                        <option vale="Bsc">Abuja</option>
                                                                        <option value="Ond">Lagos</option>
                                                                        <option value="Hnd">Portharcourt</option>
                                                                    </select>
                                                                </div>
                                                        <button type="submit"><i className="la la-search" /></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="scroll-to style2">
                                    <a href="#scroll-here" title=""><i className="la la-arrow-down" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const selectField = {
    height: 50,
    paddingLeft: 10,
    marginRight:20
};

const mapStateToProps = (state) =>{
    return {
        result: state.SearchReducer.param
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHomeSearch: (searchParam) => {
            dispatch(homeSearchWorker(searchParam));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeBannerComponent));