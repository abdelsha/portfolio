import React from "react";
import classes from "./Main_Posts.module.css"
import CommonCard from "../../../UI/Card/CommonCard";
import {connect} from 'react-redux';
import PostModal from "../../PostModal/PostModal";
import {useEffect, useState} from "react";
import {getArticlesAPI} from "../../../actions";
import Aux from '../../../hoc/Aux';
import ReactPlayer from "react-player";





function Main_Posts(props){
  
  useEffect(() => {
    props.getArticles();
  }, []);
  
  return (
    <div className={classes.Loading}>
      {props.loading >0 && <img className= {classes.LoadBar} src="/images/spin-loader.svg" />}
    {props.articles.length >0 && props.articles.map((article,key) => (
      <div className={classes.CommonCard}>
      
      <div className={classes.Content}>
        <div className={classes.Article}>
          <div className={classes.SharedActor}>
            <a>
              {console.log(props.user)}
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} all="" />
              ) : (
                <img src="/images/user.png" all=""></img>
              )}
              <div>
                <span>{article.actor.title}</span>
                <span>{article.actor.description}</span>
                <span>{article.actor.date.toDate().toLocaleDateString()}</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.png" all=""></img>
            </button>
          </div>
          <div className={classes.Description}>
            {article.description}
            <div className={classes.SharedImg}>
              <a>
                { !article.sharedImg && article.video? <ReactPlayer width={'100%'} url={article.video} />
                : (article.sharedImg && <img src={article.sharedImg}/>)
                }
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    ))}
    
    </div>
  );}



const mapStateToProps = (state) => {
    return{
        user:state.userState.user,
        loading: state.articleState.loading,
        articles: state.articleState.articles,
    };
}

const mapDispatchToProps=(dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});
export default connect (mapStateToProps, mapDispatchToProps)(Main_Posts);