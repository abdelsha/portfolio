import LeftSide from '../components/HomePage/LeftSide/LeftSide';
import Main from '../components/HomePage/Main/Main';
import RightSide from '../components/HomePage/RightSide/RightSide';
import classes from './Homepage.module.css';
import PostModal from '../components/PostModal/PostModal';
import {useState} from "react";



function Homepage(){

    return <div className={classes.main}>
        
        <div className={classes.Layout}>
            <LeftSide/>
            <Main/>
            <RightSide/>
            
            
        </div>
        
    </div>
}

export default Homepage;