import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CandidateListRow extends Component {
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        return (
            <div className="emply-list">
                <div className="emply-list-thumb">
                    <Link to=""><img src="http://placehold.it/80x80" alt="" /></Link>
                </div>
                <div className="emply-list-info">
                    <div className="job-is ft"><Link to="/view-candidate">View Information</Link></div>
                    <h3>{this.Capitalize(this.props.info.FirstName)} {this.Capitalize(this.props.info.LastName)}</h3>
                    <span>{this.Capitalize(this.props.info.CategoryName)}</span>
                    <h6><i className="la la-map-marker" />{this.Capitalize(this.props.info.StateOfOrigin)}</h6>
                    <p>{this.Capitalize(this.props.info.Objective)}</p>
                </div>
            </div>
        );
    }
}

export default CandidateListRow;