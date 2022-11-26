const initialState = {
	items: [],
	isLoaded: false,
}

export const pizzas = (state = initialState, action: { type: string, payload: string }) => {
	switch (action.type) {
		case 'SET_PIZZAS':
			return {
				...state,
				items: action.payload
			};
		default:
			return state
	}
}