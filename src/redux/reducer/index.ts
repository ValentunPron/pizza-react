import { combineReducers } from "redux";

import { pizzas } from './pizzas';
import { filter } from "./filter";

export const rootReducers = combineReducers({
	pizzas,
	filter,
})