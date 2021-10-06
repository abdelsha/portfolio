import React from "react";
import './AccountPage.css'
import CommonCard from "../../UI/Card/CommonCard";
import UserInfo from "../Forms/UserInfo";
import Login from "../Forms/Login";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

function AccountPage (props) {
    return <div className='AccountPage'>
        {!props.user && <Redirect to = '/Login'/> ?( <Login/>):(<UserInfo/>)}
        
        
    </div>

}

const mapStateToProps = (state) => {
    return{
        user:state.userState.user,
    };
};

export default connect (mapStateToProps)( AccountPage);