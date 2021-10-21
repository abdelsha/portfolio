import classes from './Portfolio.module.css';
import CommonCard from '../UI/Card/CommonCard';
import React from "react";
import {connect} from 'react-redux';
import {useEffect, useState} from "react";
import {getArticlesAPI} from "../actions"
import ReactPlayer from "react-player";


function Portfolio (props) {
    
    
    useEffect(() => {
        props.getArticles();
     }, []);


    return <div className={classes.main}>
        <div className={classes.Layout}>
        <p>Welcome to Amr's Portfolio</p>

    <div className={classes.Loading}>
      {props.loading >0 && <img className= {classes.LoadBar} src="/images/spin-loader.svg" />}
    {props.articles.length >0 && props.articles.map((article,key) => (
      <div className={classes.CommonCard}>
      
      <div className={classes.Content}>
        <div className={classes.Article}>
          <div className={classes.SharedActor}>
        
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
  


        </div>
       
    </div>
}










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
export default connect (mapStateToProps, mapDispatchToProps)(Portfolio);