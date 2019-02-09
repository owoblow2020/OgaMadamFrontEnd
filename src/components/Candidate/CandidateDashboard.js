import React, { Component } from 'react';
import Footer from '../Footer';
import {Link} from 'react-router-dom';
import Sample from '../Headers/Sample';
import {connect} from 'react-redux';
import { fetchTransAction, employeeByEmployer, ticketByUserAction, notificationByUser } from '../../actions';
import MenuDashboard from '../dashboardPages/MenuDashboard';

class CandidateDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            noOfTrans:0,
            noOfEmployee:0,
            noOfTicket:0,
            noOfNotifcation:0
        }
    }
    
    componentWillMount() {
        if(this.props.details){
            this.props.onFetchTrans(this.props.details.id);
            this.props.onEmployee(this.props.details.id);
            this.props.onTicket(this.props.details.id);
            this.props.onNotification(this.props.details.id);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const newProps = this.props
        if (prevProps.trans !== newProps.trans) {    
            this.setState({
                noOfTrans:newProps.trans.length,
                noOfEmployee:newProps.employee.length,
                noOfTicket:newProps.ticket.length,
                noOfNotifcation:newProps.notification.length
            })
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
                                    <MenuDashboard />
                                    <div className="col-lg-9 column">
                                        <div className="padding-left">
                                            <div className="manage-jobs-sec">
                                                <h3>Employer's Dashboard</h3>
                                                <div className="cat-sec">
                                                    <div className="row no-gape">
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category">
                                                            <Link to="">
                                                                    <i className="la la-briefcase" />
                                                                    <span>Transactions</span>
                                                                    <p>{this.state.noOfTrans} Transactions</p>
                                                               </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category view-resume-list">
                                                                <Link to="">
                                                                    <i className="la la-eye" />
                                                                    <span>View Employer's</span>
                                                                    <p>{this.state.noOfEmployee} Employer's</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category">
                                                                <Link to="">
                                                                    <i className="la la-file-text " />
                                                                    <span>Tickets</span>
                                                                    <p>{this.state.noOfTicket} Tickets</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cat-sec">
                                                    <div className="row no-gape">
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category">
                                                                <Link to="">
                                                                    <i className="la la-check" />
                                                                    <span>Notifications</span>
                                                                    <p>({this.state.noOfNotifcation} Notifications)</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category follow-companies-popup">
                                                                <Link to="">
                                                                    <i className="la la-user" />
                                                                    <span>Edit Profile</span>
                                                                    <p>Personal Information</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                            <div className="p-category">
                                                                <Link to="">
                                                                    <i className="la la-file" />
                                                                    <span>Change Password</span>
                                                                    <p>Edit Password</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

const mapStateToProps = (state) =>{
    return {
        details: state.AuthReducer,
        trans: state.TransReducer.trans,
        employee: state.EmployeeByEmployerReducer.trans,
        ticket:state.TicketByUser,
        notification:state.NotificationByUser
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onFetchTrans: (employerId) =>{
            dispatch(fetchTransAction(employerId));
        },
        onEmployee:(employerId) =>{
            dispatch(employeeByEmployer(employerId));
        },
        onTicket: (userId) =>{
            dispatch(ticketByUserAction(userId));
        },
        onNotification: (userId) => {
            dispatch(notificationByUser(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateDashboard);