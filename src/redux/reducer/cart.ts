const initialState: stateInterface = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
}

interface stateInterface {
	items: any,
	totalPrice: number,
	totalCount: number
}

export const cart = (state = initialState, action: { type: string, payload: any }) => {
	switch (action.type) {
		case 'ADD_PIZZA_CART':
			return {
				...state,
				items: {
					[action.payload.id]: [...state.items[action.payload.id], action.payload],
				},
			}
		default:
			return state
	}
}