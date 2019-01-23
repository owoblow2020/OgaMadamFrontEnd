import { loginAuth } from "../actions";
import {connect} from 'react-redux';
import HomeSignInComponent from "../components/Home/HomeSignInComponent";


const mapStateToProps = state =>{
    return{

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onLogin: (inputTaskName) =>{
            dispatch(loginAuth(inputTaskName));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(HomeSignInComponent);