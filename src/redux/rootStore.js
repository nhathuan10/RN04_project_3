import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import signUpReducer from "./reducers/signUpReducer";
import listCategoryReducer from "./reducers/listCategoryReducer";

const rootReducers = combineReducers({ signUpReducer, listCategoryReducer });

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;