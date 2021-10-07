import React from "react";
import CommonCard from "../../UI/Card/CommonCard";
import classes from './UserInfo.module.css';
import {connect} from 'react-redux';

function UserInfo(props) {
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
                    <img src="/images/user.png" all= ""></img>
                  )}
                </span>
              </button>
              <a>Amr Shakour</a>
            </div>
            <div className={classes.Description}>
              <div className={classes.Rowone}>
                <a>
                  First Name:
                  <input type="text" placeholder="First Name" />
                </a>
                <a>
                  Last Name:
                  <input type="text" placeholder="Last Name" />
                </a>
              </div>

              <div className={classes.Rowone}>
                <a>
                  Email address:
                  <input type="text" placeholder="something@gmail.com" />
                </a>
                <a>
                  Phone Number:
                  <input type="text" placeholder="999-999-9999" />
                </a>
              </div>

              <div className={classes.Rowone}>
                <a>
                  Github:
                  <input type="text" placeholder="Github-Link" />
                </a>
                <a>
                  Linkedin:
                  <input type="text" placeholder="Linkedin-Link" />
                </a>
              </div>
              <div className={classes.Rowone}>
                <a>
                  Website:
                  <input type="text" placeholder="Website-url" />
                </a>
                <a>
                  Facebook:
                  <input type="text" placeholder="Facebook-link" />
                </a>
              </div>
              <div className={classes.Rowone}>
                <p>
                  Bio:
                  <input
                    type="text"
                    placeholder="Let people know more about you..."
                  />
                </p>
              </div>
            </div>
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

export default connect (mapStateToProps)(UserInfo);