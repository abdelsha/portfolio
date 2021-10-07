import { Link } from 'react-router-dom';
import Aux from '../../hoc/Aux';
import classes from './MainNavigation.module.css';
import {connect} from 'react-redux';
import {signOutApi} from '../../actions';
import { Redirect } from "react-router";
import {useDispatch, useSelector} from "react-redux";


function MainNavigation(props) {
    
        const userstat = useSelector((state) => {
          return state.userState.user;
        });
        const dispatch = useDispatch();

    
    return (
        <Aux >
            {!props.user && <Redirect to = '/'/>}
            <header className={classes.header}>

                <nav>
                    <div>
                        <img className={classes.logo} src="/images/logo1.png"></img>
                    </div>

                </nav>

                <div className={classes.navmenue}>
                    
                    <Link to='/'>Home</Link>


                    <Link to='/Skills'>Skills</Link>


                    <Link to='/Experience'>Experience</Link>


                    <Link to='/Portfolio'>Portfolio</Link>


                    <Link to='/Contact'>Contact</Link>

                    {userstat ? (<Link to='/Accounts'>Accounts</Link>)
                    :(<Link to='/Accounts'>Sign in</Link>)}
                    


                </div>
                <div className={classes.User}>
                    <div>
                        
                        {userstat && userstat.photoURL ?
                        (
                            <div>
                                <img className={classes.UserImage} src={props.user.photoURL} all=""/>
                            <span>Me
                            <img  src="/images/down-icon.svg" all=""></img>
                            </span>
                            
                            <p onClick={()=> dispatch(signOutApi())} >
                            Sign Out
                            </p>
                        </div>
                        ):(
                        <img className={classes.UserImagetwo} src="/images/user1.svg" all=""></img>
                        )}
                        
                    </div>
                    
                </div>

            </header>

        </Aux>




    );
}


const mapStateToProps = (state) => {
    return{
        user:state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () =>dispatch(signOutApi()),
});

export default connect (mapStateToProps, mapDispatchToProps)(MainNavigation);