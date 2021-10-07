import CommonCard from "../../../UI/Card/CommonCard";
import React from "react";
import classes from "./Main_Share.module.css"
import {connect} from 'react-redux';
import PostModal from "../../PostModal/PostModal";
import {useState} from "react";

function Main_Share(props) {
  const [showModal, setShowModal] =useState('close');

  const handleClick = (e) => {
      e.preventDefault();
      if( e.target !== e.currentTarget){
          return;
      }

      switch (showModal){
          case "open":
              setShowModal("close");
              break;
          case "close":
              setShowModal("open");
              break;
          default:
              setShowModal("close");
              break;

      };
  }  
  
  return (
      <CommonCard>
        <div className={classes.ShareBox}>
          
          <div className={classes.User}>
            {props.user && props.user.photoURL ? (
              <img
               
                src={props.user.photoURL}
                all=""
              />
            ) : (
              <img  src="/images/user.svg" all=""></img>
            )}
            <button onClick={handleClick} disabled= {props.loading? true:false}
            >Start a Post...</button>
          </div>
          <div className={classes.Logos}>
            <button>
              <img src="/images/photo.png " all=""></img>
              <span>Photo</span>
            </button>

            <button>
              <img src="/images/video.png " all=""></img>
              <span>Video</span>
            </button>

            <button>
              <img src="/images/Event.png " all=""></img>
              <span>Event</span>
            </button>

            <button>
              <img src="/images/post.png " all=""></img>
              <span>Post</span>
            </button>
          </div>
        </div>

        <PostModal showModal ={showModal} handleClick={handleClick}/>
      </CommonCard>
      
    );

}
const mapStateToProps = (state) => {
    return{
        user:state.userState.user,
    };
};
export default connect (mapStateToProps)(Main_Share);