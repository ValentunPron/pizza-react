const initialState = {
	category: -1,
	sortBy: {
		type: 'popular',
		order: 'desc'
	},
}

export const filter = (state = initialState, action: { type: string, payload: string & number }) => {
	switch (action.type) {
		case 'SET_SORT_BY':
			return {
				...state,
				sortBy: action.payload
			};
		case 'SET_CATEGORY':
			return {
				...state,
				category: action.payload
			}
		default:
			return state
	}
}