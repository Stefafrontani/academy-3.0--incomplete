import thunkMiddleware from "redux-thunk";
import { logger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducers from "../reducers/index";

const store = createStore(
    rootReducers,
    applyMiddleware(thunkMiddleware)
);

export default store;
