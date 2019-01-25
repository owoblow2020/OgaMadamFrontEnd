import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log(rest.data.auth);
    return (

        <Route {...rest} render={(props) =>
            <h1>Dashboard</h1>
        } />
    )
}

const mapStateToProps = (state) => {
    //console.log(state.LoginReducer);
    return {
        data:state.LoginReducer
    }
}

export default connect(mapStateToProps, null)(PrivateRoute);