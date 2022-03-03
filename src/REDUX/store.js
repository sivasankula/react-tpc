import { applyMiddleware, createStore } from "redux";
import userReducer from "./userReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";


const store = createStore(userReducer,applyMiddleware(logger,thunk))

export default store