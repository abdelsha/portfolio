import CommonCard from "../../UI/Card/CommonCard";
import './Login.css';
import React from "react";
import {connect} from 'react-redux';
import {signInApi} from '../../actions/index';
import { Redirect } from "react-router";
import {useState} from "react";


function Login(props){
    const [loggedIn,setLoggedIn] = useState();

    const LogInHelper=() => {
        if (props.user) {
            <Redirect to ='/'/>
        };
        
    };
    return <div className='Main'>
        
        {
            props.user && <Redirect to ='/'/>
        }
        <div className='Layout'>
            <div className='Container'>
                <CommonCard>
                    <div className='Container'>Please Login

                        <div className='LoginBox'>
                            <button>
                                <div className='UserName'>
                                    <a>User Name:</a>
                                    <input type="text" placeholder="Username..." />
                                </div>
                                <div className='Password'>
                                    <a>Password:</a>
                                    <input type="text" placeholder="Password..." />

                                </div>
                            </button>

                        </div>
                        <div className='ForgotPass'>
                            <button>Forgot Password</button>

                        </div>
                        <div className='SignWithGoogle' onClick={()=>props.signIn()}>
                            <button>
                                <img src="./images/Google.png" all=""></img>
                                <a>Sign in with Google</a>
                            </button>

                        </div>
                    </div>
                </CommonCard>
            </div>
        </div>
    
    </div>
}


const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signIn: () =>dispatch(signInApi()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
