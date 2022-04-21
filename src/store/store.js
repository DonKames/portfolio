import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import { authReducer } from "../reducers/authReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = configureStore(
    authReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);