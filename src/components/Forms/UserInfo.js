import React from "react";
import CommonCard from "../../UI/Card/CommonCard";
import './UserInfo.css';
import {connect} from 'react-redux';

function UserInfo(props) {
    return (
      <div className="AccountPage">
        <CommonCard>
          <div className="Accounts">
            <div className="Profile">
              <button>
                <t>
                  {props.user && props.user.photoURL ? (
                    <img src={props.user.photoURL} all="" />
                  ) : (
                    <img src="/images/user.svg"></img>
                  )}
                </t>
              </button>
              <a>Amr Shakour</a>
            </div>
            <div className="Description">
              <div className="Rowone">
                <a>
                  First Name:
                  <input type="text" placeholder="First Name" />
                </a>
                <a>
                  Last Name:
                  <input type="text" placeholder="Last Name" />
                </a>
              </div>

              <div className="Rowone">
                <a>
                  Email address:
                  <input type="text" placeholder="something@gmail.com" />
                </a>
                <a>
                  Phone Number:
                  <input type="text" placeholder="999-999-9999" />
                </a>
              </div>

              <div className="Rowone">
                <a>
                  Github:
                  <input type="text" placeholder="Github-Link" />
                </a>
                <a>
                  Linkedin:
                  <input type="text" placeholder="Linkedin-Link" />
                </a>
              </div>
              <div className="Rowone">
                <a>
                  Website:
                  <input type="text" placeholder="Website-url" />
                </a>
                <a>
                  Facebook:
                  <input type="text" placeholder="Facebook-link" />
                </a>
              </div>
              <div className="Rowone">
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