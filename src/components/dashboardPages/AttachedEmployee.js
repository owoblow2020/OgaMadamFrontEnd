import React, { Component } from 'react';
import Sample from '../Headers/Sample';
import MenuDashboard from './MenuDashboard';
import Footer from '../Footer';
import { connect } from 'react-redux';
import { employeeByEmployer } from '../../actions';

class AttachedEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    }

    componentWillMount() {
        if (this.props.details) {
            this.setState({ notifications: this.props.employee });
            this.props.onEmployee(this.props.details.id);
        }
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    render() {

        const tran = this.state.notifications === [] ? <tr><td>No Notification</td></tr>
            :
            this.props.employee.map(item =>
                <tr key={item.Id}>
                    <td>
                        <div className="table-list-title">
                            <h3>{this.Capitalize(item.FirstName)} {this.Capitalize(item.LastName)}</h3>
                        </div>
                    </td>
                    <td>
                        <span>{item.AttachedDate}</span>
                    </td>
                    <td>
                        <span>{item.Sex}</span>
                    </td>
                    <td>
                        <span>{item.PhoneNumber}</span>
                    </td>
                    <td>
                        <span className="status active">{new Intl.NumberFormat('en-GB', {
                            style: 'currency',
                            currency: 'NGN',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        }).format(item.SalaryAmount)}</span>
                    </td>
                    <td>
                        <span className="table-list-title"><h3>{this.Capitalize(item.StateOfOrigin)}</h3></span>
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
                                                            <td>Employee Name</td>
                                                            <td>Employment Date</td>
                                                            <td>Sex</td>
                                                            <td>Phone Number</td>
                                                            <td>Salary Amount</td>
                                                            <td>State Of Origin</td>
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
        employee: state.EmployeeByEmployerReducer.trans
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEmployee: (employerId) => {
            dispatch(employeeByEmployer(employerId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttachedEmployee);