import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuDashboard extends Component {

    render() {
        return (
            <aside className="col-lg-3 column border-right">
                <div className="widget">
                    <div className="tree_widget-sec">
                        <ul>
                            <li className="inner-child">
                                <Link to="/dashboard"><i className="la la-file-text" />Dashboard</Link>

                            </li>
                            <li >
                                <Link to="/transactions"><i className="la la-money" />Transactions</Link>
                                
                            </li>

                            <li >
                                <Link to="/attached-employee"><i className="la la-lock" />Attached Employee's</Link>

                            </li>
                            <li className="inner-child">
                                <Link to=""><i className="la la-paper-plane" />Reviews</Link>

                            </li>
                            <li >
                                <Link to="/tickets"><i className="la la-user" />Tickets</Link>

                            </li>
                            <li >
                                <Link to="/notifications"><i className="la la-file-text" />Notifications</Link>

                            </li>
                            <li className="inner-child">
                                <Link to=""><i className="la la-flash" />Profile Managment</Link>
                                <ul>
                                    <li><Link to="">Change Password</Link></li>
                                    <li><Link to="">Edit Personal Information</Link></li>
                                </ul>
                            </li>

                            <li><Link to=""><i className="la la-unlink" />Logout</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="widget">
                    <div className="skill-perc">

                    </div>
                </div>
            </aside>

        );
    }
}

export default MenuDashboard;