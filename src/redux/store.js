import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducers } from "./reducer";

const compreseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducers, compreseEnhancers(applyMiddleware(thunk)));
