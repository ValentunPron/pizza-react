const initialState = {
	category: 0,
	sortBy: 'popular',
}

export const filter = (state = initialState, action: { type: string, payload: string }) => {
	switch (action.type) {
		case 'SET_SORT_BY':
			return {
				...state,
				sortBy: action.payload
			};
		default:
			return state
	}
}