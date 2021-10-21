import {
    SET_LOADING_STATUS,
    GET_ARTICLES,
    GET_PROFILE,
    GET_EXPERIENCE,
}from '../actions/actionType'

export const initState ={
    loading:false,
    articles: [],
    profile:[],
    experience:[],
};

const articleReducer = ( state = initState, action) => {
    switch (action.type) {
      case SET_LOADING_STATUS:
        return {
          ...state,
          loading: action.status,
        };
      case GET_ARTICLES:
        return {
          ...state,
          articles: action.payload,
        };
      case GET_PROFILE:
        return {
          ...state,
          profile: action.payload,
        };
      case GET_EXPERIENCE:
        return {
          ...state,
          experience: action.payload,
        };
      default:
        return state;
    }
};
//this sis to see if it will upload to GIT
export default articleReducer;