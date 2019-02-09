import React, { Component } from 'react';
import Sample from '../Headers/Sample';
import MenuDashboard from './MenuDashboard';
import Footer from '../Footer';
import { connect } from 'react-redux';

import { fetchTransAction } from '../../actions';

class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }

    componentWillMount() {
        if (this.props.details) {
            this.setState({ transactions: this.props.trans });
            this.props.onFetchTrans(this.props.details.id);
        }
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const tran = this.state.transactions === [] ?  <tr>No Transaction</tr>
        :
        this.props.trans.map(item =>
            <tr key={item.TransactionId}>
                <td>
                    <span>{item.TransactionId}</span>
                </td>
                <td>
                    <div className="table-list-title">
                        <h3>{this.Capitalize(item.EmployeeId)}</h3>
                    </div>
                </td>
                <td>
                    <span>{this.Capitalize(item.PaymentCategory)}</span>
                </td>
                <td>
                    <span>{item.TransactionDate}</span>
                </td>
                <td>
                    <span>{this.Capitalize(item.PaymentChannel)}</span>
                </td>
                <td>
                    <span className="status active"> ₦{item.Amount}</span>
                </td>
                <td>
                    <span className="table-list-title"><h3>{this.Capitalize(item.PaymentStatus)}</h3></span>
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
                                                <h3>Transactions</h3>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td>Transaction ID</td>
                                                            <td>Employee's Name</td>
                                                            <td>Title</td>
                                                            <td>Payment Date</td>
                                                            <td>Payment Type</td>
                                                            <td>Amount</td>
                                                            <td>Status</td>
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
    console.log(state.TransReducer.trans);
    return {
        details: state.AuthReducer,
        trans: state.TransReducer.trans
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchTrans: (employerId) => {
            dispatch(fetchTransAction(employerId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);