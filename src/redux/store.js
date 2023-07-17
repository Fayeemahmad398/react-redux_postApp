import { applyMiddleware } from "redux";
import postReducer from "./reducers/postReducer";
import { createStore } from "redux";
import thunk from 'redux-thunk';

const store = createStore(postReducer, applyMiddleware(thunk));

export default store;


