import React from "react";
import CommonCard from "../../UI/Card/CommonCard";
import classes from './UserInfo.module.css';
import {connect} from 'react-redux';
import {useState} from 'react';
import {updateExperienceApi, updateProfileApi} from "../../actions";
import firebase from "firebase";

function UserInfo(props) {
  const [firstNameText, setFirstNameText] = useState("sam");
  const [lasttNameText, setLastNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [phoneText, setPhoneText] = useState("");
  const [githubText, setGithubText] = useState("");
  const [linkedinText, setLinkedinText] = useState("");
  const [website, setWebsiteText] = useState("");
  const [facebook, setFacebookText] = useState("");
  const [bio, setBioText] = useState("");

  const [company, setCompanyText] = useState("");
  const [duration, setDurationText] = useState("");
  const [description, setDescriptionText] = useState("");
  const [position, setPositionText]=useState("");
  


  const updateProfile = (e) => {
    if (e.target !== e.currentTarget) {
      console.log("hello");
      return;
    }
    const payload ={
      user:props.user,
      timestamp: firebase.firestore.Timestamp.now(),
      firstName:firstNameText,
      lastName:lasttNameText,
      email:emailText,
      phoneNumber:phoneText,
      github:githubText,
      linkedin:linkedinText,
      website:website,
      facebook:facebook,
      bio:bio,
    };

      props.updateProfile(payload);
      resetone(e);
    
  };
  const handleClick = (e) => {
    e.preventDefault();
    if( e.target !== e.currentTarget){
        return;
    }
  };

  const resetone = (e) => {
    setFirstNameText("");
    setGithubText("");
    setLastNameText("");
    setLinkedinText("");
    setEmailText("");
    setPhoneText("");
    setWebsiteText("")
    setFacebookText("")
    setBioText("");
    handleClick(e); 
   };

   const updateExperience = (e) => {
      if (e.target !== e.currentTarget) {
        console.log("hello");
        return;
      }
      const payload ={
        user:props.user,
        timestamp: firebase.firestore.Timestamp.now(),
        company:company,
        duration:duration,
        description:description,
        position:position,
      };
      props.updateExperience(payload);
      resettwo(e);

   }

   const resettwo = (e) => {
     setCompanyText("");
     setDurationText("");
     setDescriptionText("");
     setPositionText("");
     handleClick(e);
   };
  
    return (
      <div className={classes.AccountPage}>
        <CommonCard>
          <div className={classes.Accounts}>
            <div className={classes.Profile}>
              <button>
                <span>
                  {props.user && props.user.photoURL ? (
                    <img src={props.user.photoURL} all="" />
                  ) : (
                    <img src="/images/user.png" all=""></img>
                  )}
                </span>
              </button>
              <a>Amr Shakour</a>
            </div>
            <div className={classes.Description}>
              <div className={classes.Rowone}>
                <a>
                  First Name:
                  <input value={firstNameText} onChange={(e) =>setFirstNameText(e.target.value)} placeholder="First Name" />
                </a>
                <a>
                  Last Name:
                  <input value={lasttNameText} onChange={(e) => setLastNameText(e.target.value)} type="text" placeholder="Last Name" />
                </a>
              </div>

              <div className={classes.Rowone}>
                <a>
                  Email address:
                  <input value={emailText} onChange={(e) => setEmailText(e.target.value)} type="text" placeholder="something@gmail.com" />
                </a>
                <a>
                  Phone Number:
                  <input value={phoneText} onChange={(e) => setPhoneText(e.target.value)} type="text" placeholder="999-999-9999" />
                </a>
              </div>

              <div className={classes.Rowone}>
                <a>
                  Github:
                  <input value={githubText} onChange={(e) => setGithubText(e.target.value)} type="text" placeholder="Github-Link" />
                </a>
                <a>
                  Linkedin:
                  <input value={linkedinText} onChange={(e) => setLinkedinText(e.target.value)} type="text" placeholder="Linkedin-Link" />
                </a>
              </div>
              <div className={classes.Rowone}>
                <a>
                  Website:
                  <input value = {website} onChange={(e) => setWebsiteText(e.target.value)} type="text" placeholder="Website-url" />
                </a>
                <a>
                  Facebook:
                  <input value={facebook} onChange={(e) => setFacebookText(e.target.value)} type="text" placeholder="Facebook-link" />
                </a>
              </div>
              <div className={classes.Rowone}>
                <p>
                  Bio:
                  <textarea
                    value={bio}
                    onChange={(e) => setBioText(e.target.value)}
                    type="text"
                    placeholder="Let people know more about you..."
                  />
                </p>
              </div>
              
            </div>
            <div  className={classes.submitone}> 
                <button onClick={(event) =>updateProfile(event)}>
                  Submit
                </button>
              </div>
          </div>
        </CommonCard>
        <CommonCard>
          <div className={classes.headers}>
          <h2> Add an Experience</h2>
          </div>
          <div className={classes.Description}>
            <div className={classes.Experience}>
              <p>
                Comany Name:
                <textarea value={company} onChange={(e) => setCompanyText(e.target.value)} type="text" placeholder="What is the company name" />
              </p>
              <p>
                Position
                <textarea
                  value={position}
                  onChange={(e) => setPositionText(e.target.value)}
                  type="text"
                  placeholder="Enter the positon"
                />
              </p>
              <p>
                Duration
                <textarea
                  value={duration}
                  onChange={(e) => setDurationText(e.target.value)}
                  type="text"
                  placeholder="Enter the duration, ex. Dec 2017 - Jan 2019"
                />
              </p>
              
              <p className={classes.Descriptionexp}>
                Description:
                <textarea value ={description} onChange={(e) => setDescriptionText(e.target.value)} type="text" placeholder="What did you do?" />
              </p>
            </div>
          </div>
          <div  className={classes.submitone}> 
                <button onClick={(event) =>updateExperience(event)}>
                  Submit
                </button>
              </div>
        </CommonCard>
      </div>
    );
    
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};
const mapDispatchToProps = (dispatch) => ({
  updateProfile: (payload) => {
    //console.log(payload)
    dispatch(updateProfileApi(payload))
  },
  updateExperience: (paylod) =>{
    dispatch(updateExperienceApi(paylod))
  },
});


export default connect (mapStateToProps, mapDispatchToProps)(UserInfo);