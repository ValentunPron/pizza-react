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
		case 'ADD_PIZZA_CART': {
			const newItem = {
				...state.items,
				[action.payload.id]: !state.items[action.payload.id]
					? [action.payload]
					: [...state.items[action.payload.id], action.payload],
			}
			const allPizzas = [].concat.apply([], Object.values(newItem));
			return {
				...state,
				items: newItem,
				totalPrice: allPizzas.reduce((sum: number, obj: { price: number }): number => obj.price + sum, 0),
				totalCount: allPizzas.length,
			}
		}
		default:
			return state
	}
}