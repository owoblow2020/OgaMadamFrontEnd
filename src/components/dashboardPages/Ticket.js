import React, { Component } from 'react';
import Sample from '../Headers/Sample';
import MenuDashboard from './MenuDashboard';
import Footer from '../Footer';
import { connect } from 'react-redux';

import { ticketByUserAction } from '../../actions';

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticket: []
        }
    }

    componentWillMount() {
        if (this.props.details) {
            this.setState({ ticket: this.props.trans });
            this.props.onTicket(this.props.details.id);
        }
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const tran = this.state.ticket === [] ? <tr><td>No Ticket</td></tr>
            :
            this.props.ticket.map(item =>
                <tr key={item.TicketId}>
                    <td>
                        <span>{item.TicketId}</span>
                    </td>
                    <td>
                        <div className="table-list-title">
                            <h3>{this.Capitalize(item.Title)}</h3>
                        </div>
                    </td>
                    <td>
                        <span>{this.Capitalize(item.Description)}</span>
                    </td>
                    <td>
                        <div className="table-list-title">
                            <h3>{this.Capitalize(item.Status)}</h3>
                        </div>
                    </td>
                    <td>
                        <span>{item.CreatedAt}</span>
                    </td>
                    <td>
                        <span><h3>{item.noOfComments}</h3></span>
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
                                                <h3>List oF Tickets</h3>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td>Ticket ID</td>
                                                            <td>Title</td>
                                                            <td>Description</td>
                                                            <td>Status</td>
                                                            <td>Date</td>
                                                            <td>No Of Coment</td>
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
        ticket: state.TicketByUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTicket: (userId) => {
            dispatch(ticketByUserAction(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);