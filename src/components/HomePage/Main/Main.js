import React from 'react'
import PropTypes from 'prop-types'
import classes from './Main.module.css'
import CommonCard from '../../../UI/Card/CommonCard';
import Main_Share from './Main_Share';
import Main_Posts from './Main_Posts';
import Bio from './Bio';
import PostModal from '../../PostModal/PostModal';

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


function Main(props) {
    return (
        <div className={classes.Container} >
            {props.user?( <Main_Share/>)
            :("")}
            <Bio/>
            <Main_Posts/>
            
            
            
                

        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        user:state.userState.user,
    };
};
export default connect(mapStateToProps)(Main);

