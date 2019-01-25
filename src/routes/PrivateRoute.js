import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log(rest.data.auth);
    return (

        <Route {...rest} render={(props) =>
            rest.data.auth === true ?
            <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }} />
        } />
    )
}

const mapStateToProps = (state) => {
    return {
        data:state.LoginReducer
    }
}

export default connect(mapStateToProps, null)(PrivateRoute);