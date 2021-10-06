import { combineReducers, createStore } from "redux";
import userReducer from './ducks/userState';

const reducer = combineReducers({
    userState: userReducer
});

const store=createStore(reducer);

export default store;