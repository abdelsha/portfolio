import { auth, provider, storage } from '../firebase';
import db from '../firebase';
import {SET_USER, SET_LOADING_STATUS, GET_ARTICLES, GET_EXPERIENCE, GET_PROFILE} from './actionType';

const email= "amrshakour97@gmail.com";
export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
});

export const setLoading =(status) =>({
    type: SET_LOADING_STATUS,
    status:status,
});

export const getArticles = (payload) => ({
    type: GET_ARTICLES,
    payload: payload,
});

export const getExperience =(payload) => ({
    type: GET_EXPERIENCE,
    payload: payload,
});

export const getProfile = (payload) => ({
    type: GET_PROFILE,
    payload:payload,
})

export function signInApi() {
    return (dispatch) => {
        auth.signInWithPopup(provider)
        .then((payload)=>{
            console.log(payload.user.email);

            if (payload.user.email === email) {
                dispatch(setUser(payload.user))
            }else {
                console.log("i am here")
                alert('You are not an authorized user');
                dispatch(setUser(null));
            };
            
        })
        .catch( (error) => alert(error.message));
    };
}

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if(user && user.email==email){
                //console.log(user);
                dispatch(setUser(user));
            }else{
                dispatch(setUser(null));
            }

        });
    }
}

export function signOutApi() {
    return (dispatch) => {
        auth.signOut().then( () => {
            dispatch(setUser(null));
        }).catch((error) => {
            console.log(error.message);
        });
    };
}

export function postArticleApi(payload) {
    return (dispatch) => {
        dispatch(setLoading(true));


        if (payload.image !=""){
            const upload = storage
            .ref(`images/${payload.image.name}`)
            .put(payload.image);
        upload.on('state_changed', (snapshot) => {
            const progress =
                (snapshot.bytesTransferred/snapshot.totalBytes) *100;

            console.log(`progress: ${progress}%`);
            if (snapshot.state === "RUNNING") {
                console.log(`progress: ${progress}%`);
            }
        }, error => console.log(error.code),
        async () => {
            const downloadURL = await upload.snapshot.ref.getDownloadURL();
            db.collection(`article`).add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp, 
                    image: payload.user.photoURL
                },
                video: payload.video,
                sharedImg: downloadURL,
                comments:0,
                description:payload.description,
            })
            dispatch(setLoading(false));
        }
        )
    }else if (payload.video){
        db.collection(`article`).add({
            actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp, 
                image: payload.user.photoURL
            },
            video: payload.video,
            sharedImg: "",
            comments:0,
            description:payload.description,
        })
        dispatch(setLoading(false));
    }
        
    };
}

export function updateProfileApi(payload) {
    return (dispatch) => {
        dispatch(setLoading(true));
        
            db.collection(`profile`).add({
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              firstName: payload.firstName,
              lastName: payload.lastName,
              email: payload.email,
              phoneNumber: payload.phoneNumber,
              github: payload.github,
              linkedin: payload.linkedin,
              website: payload.website,
              facebook: payload.facebook,
              bio: payload.bio,

              
            })
            dispatch(setLoading(false));
        
    }
        
    
}

export function updateExperienceApi(payload) {
    return (dispatch) => {
        dispatch(setLoading(true));
        
            db.collection(`experience`).add({
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              company:payload.company,
              duration:payload.duration,
              description:payload.description,

              
            })
            dispatch(setLoading(false));
        
    }
        
    
}

export function getArticlesAPI() {
    return (dispatch) => {
        let payload;
        
        db.collection("article")
        .orderBy("actor.date","desc")
        .onSnapshot((snapshot) => {
            payload= snapshot.docs.map((doc) => doc.data());
            //console.log(payload)
            dispatch(getArticles(payload));
        });
    };
}

export function getAProfileAPI() {
    return (dispatch) => {
        let payload;
        
        db.collection("profile")
        .orderBy("profile.date","desc")
        .onSnapshot((snapshot) => {
            console.log(snapshot.docs[0]);
            payload= snapshot.docs.map((doc) => doc.data());;
            //console.log(payload)
            dispatch(getProfile(payload));
        });
    };
}

export function getExperienceAPI() {
    return (dispatch) => {
        let payload;
        
        db.collection("experience")
        .orderBy("actor.date","desc")
        .onSnapshot((snapshot) => {
            payload= snapshot.docs.map((doc) => doc.data());
            console.log(payload)
            dispatch(getExperience(payload));
        });
    };
}