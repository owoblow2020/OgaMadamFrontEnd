import React, { Component } from 'react';
import Footer from '../Footer';
import Sample from '../Headers/Sample';
import { connect } from 'react-redux';
import { workApply } from '../../actions';

class CandidateFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            middleName: "",
            email: "",
            phoneNumber: "",
            bvn: "",
            nimc: "",
            placeOfBirth: "",
            category: "",
            dateOfBirth: "",
            stateOfBirth: "",
            sex: "",
            address: "",
            qualification: "",
            result: '',
            submit: "Apply"
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkResponseCode = this.checkResponseCode.bind(this);
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ submit: "Waiting...." })
        this.props.onWorkApply({
            Email: this.state.email,
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Address: this.state.address,
            DateOfBirth: this.state.dateOfBirth,
            PlaceOfBirth: this.state.placeOfBirth,
            MiddleName: this.state.middleName,
            PhoneNumber: this.state.phoneNumber,
            StateOfOrigin: this.state.stateOfBirth,
            Sex: this.state.sex,
            BVN: this.state.bvn,
            NIMC: this.state.nimc,
            QualificationType: this.state.qualification
        });


    }

    componentDidUpdate(prevProps, prevState) {
        const newProps = this.props
        if (prevProps.param !== newProps.param) {
            console.log('yes');
            this.setState({
                result: newProps.param,
                submit: "Apply"

            });
        }
    }

    componentWillMount() {

    }

    render() {
        const warning = this.state.result.ResponseCode === 403 ?

            <div className="alert alert-danger alert-dismissible fade show" style={{ height: 70, margintop: 50 }} role="alert">
                <strong>Failed!</strong>   {this.props.param.Message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            : ""
        const success = this.state.result.ResponseCode === 200 ?

            <div className="alert alert-success alert-dismissible fade show" style={{ height: 70, margintop: 50 }} role="alert">
                <strong>Failed!</strong>   {this.props.param.Message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            : ""

        return (
            <div>
                <div className="theme-layout" id="scrollup">
                    <Sample />
                    <section>
                        <div className="block remove-top">
                            <div className="container">
                                <div className="row no-gape">
                                    <div className="col-lg-2 column">

                                    </div>

                                    <div className="col-lg-8 column">
                                        <div className="padding-left">
                                            <div className="manage-jobs-sec">
                                                {
                                                    warning
                                                }
                                                {
                                                    success
                                                }
                                                <div className="border-title"><h3>Personal Details <span style={personalDetail}>(All fields mark * are mandatary)</span></h3></div>

                                                <form onSubmit={this.onSubmit}>
                                                    <div className="resumeadd-form">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <span className="pf-title">First Name<span style={requiredFileds}>*</span></span>
                                                                <div className="pf-field">
                                                                    <input name="firstName" onChange={this.onChange} placeholder="Enter first Name" value={this.state.firstName} required type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <span className="pf-title">Last Name<span style={requiredFileds}>*</span></span>
                                                                <div className="pf-field">
                                                                    <input name="lastName" onChange={this.onChange} value={this.state.lastName} placeholder="Enter Last Name" required type="text" className="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <span className="pf-title">Middle Name</span>
                                                                <div className="pf-field">
                                                                    <input name="middleName" onChange={this.onChange} value={this.state.middleName} placeholder="Enter Middle Nmae" type="text" className="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <span className="pf-title">Email</span>
                                                                <div className="pf-field">
                                                                    <input name="email" onChange={this.onChange} value={this.state.email} placeholder="Enter Email address" type="text" className="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <span className="pf-title">Phone Number<span style={requiredFileds}>*</span></span>
                                                                <div className="pf-field">
                                                                    <input name="phoneNumber" onChange={this.onChange} value={this.state.phoneNumber} placeholder="Enter Phone Number" required type="text" className="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <span className="pf-title">Field<span style={requiredFileds}>*</span></span>
                                                                <div className="pf-field">
                                                                    <select name="category" onChange={this.onChange} style={selectField} required data-placeholder="Select Job Category" className="chosen-container chosen">
                                                                        <option>Select Job Category</option>
                                                                        {
                                                                            this.props.catParam.map(item =>
                                                                                <option key={item.CategoryId} value={item.CategoryId}>{this.Capitalize(item.Title)}</option>
                                                                            )
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <span className="pf-title">Qualification<span style={requiredFileds}>*</span></span>
                                                                <div className="pf-field">
                                                                    <select name="qualification" onChange={this.onChange} style={selectField} required data-placeholder="Select sex type" className="chosen-container chosen">
                                                                        <option>Select Sex type</option>
                                                                        <option vale="Bsc">Bsc</option>
                                                                        <option value="Ond">Ond</option>
                                                                        <option value="Hnd">Hnd</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-12">
                                                                <span className="pf-title">Place of Birth<span style={requiredFileds}>*</span></span>
                                                                <div className="pf-field">
                                                                    <input name="placeOfBirth" onChange={this.onChange} value={this.state.placeOfBirth} placeholder="Enter place of Birth" required type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <span className="pf-title">BVN<span style={requiredFileds}>*</span></span>
                                                                <div className="pf-field">
                                                                    <input name="bvn" onChange={this.onChange} value={this.state.bvn} placeholder="Enter BVN number" required type="text" className="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <span className="pf-title">NIMC<span style={requiredFileds}>*</span></span>
                                                                <div className="pf-field">
                                                                    <input name="nimc" onChange={this.onChange} value={this.state.nimc} placeholder="Enter NIMC number" required type="text" className="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <span className="pf-title">Date Of Birth<span style={requiredFileds}>*</span></span>
                                                                <div className="pf-field">
                                                                    <input name="dateOfBirth" onChange={this.onChange} value={this.state.dateOfBirth} placeholder="format 2018/10/05." required type="text" className="datepicker" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <span className="pf-title">Sex<span style={requiredFileds}>*</span></span>
                                                                <div className="pf-field">
                                                                    <select name="sex" onChange={this.onChange} style={selectField} required data-placeholder="Select sex type" className="chosen-container chosen">
                                                                        <option>Select Sex type</option>
                                                                        <option vale="Female">Female</option>
                                                                        <option value="Male">Male</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <span className="pf-title">State Of Birth<span style={requiredFileds}>*</span></span>
                                                                <div className="pf-field">
                                                                    <input value={this.state.stateOfBirth} onChange={this.onChange} name="stateOfBirth" placeholder="Enter state of birth" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <p>Max file size is 1MB, Minimum dimension: 270x210 And Suitable files are .jpg &amp; .png</p>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="upload-portfolio">
                                                                    <div className="uploadbox">
                                                                        <label htmlFor="file-upload" className="custom-file-upload">
                                                                            <i className="la la-cloud-upload" /> <span>Upload Image</span>
                                                                        </label>
                                                                        <input name="file" id="file-upload" type="file" style={{ display: 'none' }} />
                                                                    </div>
                                                                    <div className="uploadfield">
                                                                        <span className="pf-title">Title</span>
                                                                        <div className="pf-field">
                                                                            <input placeholder="Enter Title" type="text" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <span className="pf-title">Address<span style={requiredFileds}>*</span></span>
                                                                <div className="pf-field">
                                                                    <textarea onChange={this.onChange} name="address" required placeholder={"Enter address"} />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <button name="submit" type="submit">{this.state.submit}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 column">

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

const selectField = {
    height: 50,
    paddingLeft: 10
};

const personalDetail = {
    color: "Red",
    fontSize: 10
}

const requiredFileds = {
    color: "Red"
}

const mapStateToProps = (state) => {
    //console.log(state.ApplyReducer.param);
    return {
        catParam: state.CategoryReducer.cat,
        param: state.ApplyReducer.param
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onWorkApply: (workParam) => {
            dispatch(workApply(workParam));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateFormComponent);