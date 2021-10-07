import CommonCard from "../../../UI/Card/CommonCard";
import classes from "./Bio.module.css";
import React from "react";
import {connect} from 'react-redux';
function Bio(props){

    return (
      <CommonCard>
        <div className={classes.Profile}>
          <button>
            <span>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} all="" />
              ) : (
                <img src="/images/user.svg"></img>
              )}
            </span>
          </button>
          <a>Amr Shakour</a>
        </div>
        <div className={classes.Description}>
          <p>GitHub: https://github.com/abdelsha</p>
          <p>Portfolio: bit.ly/Amrshakour</p>
          <p>
            Hi, My name is Amr. It is nice to meet you! My current goal is to
            increase my soft skills and technical skills in Electronic and
            Hardware Design and use them to contribute to a cause far greater
            than I am. If you are looking for an energetic, Charismatic leader
            and a persistent team member who's hungry for knowledge and thrives
            in challenging environments, then we will be a great fit and let's
            work together to innovate for a sustainable and better future! Visit
            my portfolio for a better understanding of where I am heading and
            the steps I am taking to achieve my goal. bit.ly/Amrshakour.
          </p>
        </div>
      </CommonCard>
    );
}
const mapStateToProps = (state) => {
    return{
        user:state.userState.user,
    };
}
export default connect(mapStateToProps)(Bio);