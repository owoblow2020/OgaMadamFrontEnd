import React, { Component } from 'react';
import Sample from '../Headers/Sample';
import MenuDashboard from './MenuDashboard';
import Footer from '../Footer';
import { connect } from 'react-redux';

import { notificationByUser } from '../../actions';

class UserNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notify: []
        }
    }

    componentWillMount() {
        if (this.props.details) {
            this.setState({ notify: this.props.trans });
            this.props.onNotification(this.props.details.id);
        }
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
        const tran = this.state.notify === [] ? <tr><td>No Notification</td></tr>
            :
            this.props.notification.map(item =>
                <tr key={item.NotificationId}>
                    <td>
                        <span>{item.NotificationId}</span>
                    </td>
                    <td>
                        <div className="table-list-title">
                            <h3>{this.Capitalize(item.Description)}</h3>
                        </div>
                    </td>
                    <td>
                        <span>{this.Capitalize(item.CreatedBy)}</span>
                    </td>
                    <td>
                        <span>{item.NotificationDate}</span>
                    </td>
                </tr>
            )

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
                                                <h3>List of Notification</h3>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td>Notification ID</td>
                                                            <td>Description</td>
                                                            <td>Sender Name</td>
                                                            <td>Send Date</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            tran
                                                        }
                                                    </tbody>
                                                </table>
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

const mapStateToProps = (state) => {
    return {
        details: state.AuthReducer,
        notification: state.NotificationByUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNotification: (userId) => {
            dispatch(notificationByUser(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNotification);