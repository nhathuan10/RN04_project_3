import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import signUpReducer from "./reducers/signUpReducer";
import shoeReducer from "./reducers/shoeReducer";

const rootReducers = combineReducers({ signUpReducer, shoeReducer });

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;