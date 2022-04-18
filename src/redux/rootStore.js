import { combineReducers, createStore } from "redux";
import signUpReducer from "./reducers/signUpReducer";

const rootReducers = combineReducers({signUpReducer});

const store = createStore(rootReducers);

export default store;