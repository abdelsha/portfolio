import classes from './Experience.module.css';
import CommonCard from '../UI/Card/CommonCard';
import React from "react";
import {connect} from 'react-redux';
import {useEffect, useState} from "react";
import {getArticlesAPI, getExperienceAPI} from "../actions"
import ReactPlayer from "react-player";


function Experience(props) {
  let text = "";

  useEffect(() => {
    props.getExperience();
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.Layout}>
        <p>My Experience</p>

        <div className={classes.Loading}>
          {props.loading > 0 && (
            <img className={classes.LoadBar} src="/images/spin-loader.svg" />
          )}

          {props.experience.length > 0 &&
            props.experience.map((experience, key) => (
              <div>
                  {experience.duration? (
                      <div className={classes.CommonCard}>
                      <div className={classes.Content}>
                        <div className={classes.Article}>
                          <div className={classes.CompanyName}>
                            {experience.company}
                          </div>
                          <div className={classes.Duration}>
                            {experience.duration}
                          </div>
                        </div>
                        <div className={classes.Position}>
                          {experience.position}
                        </div>
                        <div className={classes.CompanyDescription}>
                          <p className={classes.newline}>
                            {experience.description}
                          </p>
                        </div>
                      </div>
                    </div>  
                  ):(
                    <div className={classes.CommonCard}>
                    <div className={classes.Content}>
                      <div className={classes.Article}>
                        <div className={classes.CompanyName}>
                          {experience.company}
                        </div>
                        <div className={classes.Duration}>
                          {experience.duration}
                        </div>
                      </div>
                      <div className={classes.Position}>
                        {experience.position}
                      </div>
                      <div className={classes.CompanyDescription}>
                        <p className={classes.newline}>
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </div>   
                  )}
                
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}










const mapStateToProps = (state) => {
    return{
        user:state.userState.user,
        loading: state.articleState.loading,
        articles: state.articleState.articles,
        experience: state.articleState.experience,
    };
}

const mapDispatchToProps=(dispatch) => ({
  getExperience: () => dispatch(getExperienceAPI()),
});
export default connect (mapStateToProps, mapDispatchToProps)(Experience);