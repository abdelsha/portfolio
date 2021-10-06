import { auth, provider } from '../firebase';

//action
const SET_USER = "SET_USER";

const INITIAL_STATE={
    user:null
};

//action type
export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
});
export function signInApi() {
    return (dispatch) => {
        auth.signInWithPopup(provider)
        .then((payload)=>{
            dispatch(setUser(payload.user));
        })
        .catch( (error) => alert(error.message));
    };
}

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUser(user));
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

//reducer



const userReducer = (state = INITIAL_STATE,action) =>{
    switch (action.type){
            case SET_USER:
                return {
                    ...state, user:action.user,
                }
        default:
            return state;
    }
};

export default userReducer;