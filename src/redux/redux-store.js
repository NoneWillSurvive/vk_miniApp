import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from 'redux-thunk'
import homeReducer from "./homeReducer";
import friendsReducer from "./firendsReducer";

// можем воспринимать как наш state с доп логикой reducer'ов
let reducers = combineReducers({
    home: homeReducer,
    friendsPage: friendsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
