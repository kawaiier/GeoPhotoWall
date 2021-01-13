import {applyMiddleware, combineReducers, createStore} from "redux";
import mainReducer from "./main-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    mainPage: mainReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;