import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import TestReducer from "./tests";

export const rootReducer = combineReducers({
    authReducer: AuthReducer,
    testReducer: TestReducer
});