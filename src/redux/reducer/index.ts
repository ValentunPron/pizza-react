import { combineReducers } from "redux";

import { pizzas } from './pizzas';
import { filter } from "./filter";
import { cart } from "./cart";

export const rootReducers = combineReducers({
	pizzas,
	filter,
	cart,
})