import axios from 'axios';

export const fetchPizza = (category: number, sortBy: { type: string, order: string }) => (dispatch: Function) => {
	dispatch(setLoaded(false));
	axios(`http://localhost:3001/pizzas?${category >= 0 ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
		.then(({ data }) => dispatch(setPizza(data)));
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setPizza = (items: any) => ({
	type: 'SET_PIZZAS',
	payload: items,
});