import React from "react";
import CommonCard from "../../UI/Card/CommonCard";
import classes from './PostModal.module.css'
import {useState} from "react";
import ReactPlayer from 'react-player';
import { connect } from "react-redux";
import firebase from "firebase";
import {postArticleApi} from "../../actions";

function PostModal (props) {
    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");

    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === "" || image === undefined){
            alert(`not an image, the file is a ${typeof image}`);
            return;
        }
        setShareImage(image);
    }

    const switchAssetArea = (area) => {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);

    }

    const postArticle = (e) => {
        console.log('post molone');
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            console.log('hello')
            return;
        }
        const payload = {
            image:shareImage,
            video:videoLink,
            user:props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        };
        props.postArticle(payload);
        reset(e);
    }
    const reset = (e) => {
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        props.handleClick(e); 
       };
    return (
      <>
      {props.showModal === 'open' && 
        <div className={classes.Container}>
          <div className={classes.Content}>
            <div className={classes.Headers}>
              <h2>Create a Post</h2>
              <button onClick ={ (event)=> reset(event)}>
                <img src="/images/close.png" all="" />
              </button>
            </div>
            <div className={classes.SharedContent}>
              
              
              <div className={classes.UserInfo}>
                  {props.user.photoURL ? (< img src={props.user.photoURL} />)
                  :(<img src="/images/user.png" all="" />)}
                
                <span>{props.user.displayName}</span>
              </div>
              <div className={classes.Editor}>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder=" What do you want to Post?"
                  autoFocus={true}
                ></textarea>
                { assetArea ==='image'? (
               
               
               <div className={classes.UploadImage}>
                    <input 
                    type="file" 
                    accept= "image/gif, image/jpeg, image/png"
                    name="image"
                    id="file"
                    style={{display: "none"}}
                    onChange={handleChange}
                    ></input>
                    <span>
                        <label for= "file">Select an image to share</label>
                    </span>
                    {shareImage && <img src={URL.createObjectURL(shareImage)}/>}
                </div>
                    ):(
                        assetArea === "media" && (
                    <>
                    
                    < input 
                    type="text"
                    placeholder="Please input a video Link"
                    value={videoLink}
                    onChange ={(e) => setVideoLink(e.target.value)}/>
                    {videoLink && (< ReactPlayer width={"100%"} URL={videoLink} />)}
                    </>
                    )
                    )}
                    
                
              </div>
            </div>
            <div className={classes.SharedCreation}>
              <div className={classes.AttachAssets}>
                <button className={classes.AssetButton} onClick = {()=> switchAssetArea("image")}>
                  <img src="/images/photo.png" all="" />
                </button>
                <button className={classes.AssetButton} onClick={()=> switchAssetArea("media")}>
                  <img src="/images/video.png" all="" />
                </button>
              </div>
              <div className={classes.ShareComment}>
                <div className={classes.AssetButton}>
                  <button>Share</button>
                </div>
              </div>

              <div className={classes.PostButton}>
                <div className={classes.AssetButton}>
                  <button 
                  disabled={!editorText ? true: false} 
                  style={!editorText? {background : "rgba(0,0,0,0.8)", color:"rgba(0,0,0,0.8)" } :{background : "#004182", color: "white"} }
                  onClick={(event)=>{postArticle(event)}}
                  >Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
}
      </>
    );
}


const mapStateToProps= (state) => {
    return{
        user: state.userState.user,
    }
};

const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleApi(payload)),
});
export default connect (mapStateToProps, mapDispatchToProps)(PostModal);