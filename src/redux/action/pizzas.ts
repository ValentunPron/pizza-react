import axios from 'axios';


//category: number, sortBy: { type: string, order: string }
export const fetchPizza = (category = -1, sortBy: { type: string }) => (dispatch: Function) => {
	dispatch(setLoaded(false));

	const categoryInfo: any[] = [];

	const setSortPopular = (base: any) => {
		if (categoryInfo.length <= 0) {
			return base.sort((a: { rating: number }, b: { rating: number }) => a.rating - b.rating).reverse();
		} else {
			return categoryInfo.sort((a: { rating: number }, b: { rating: number }) => a.rating - b.rating).reverse();
		}
	}

	const setSortPrice = (base: any) => {
		if (categoryInfo.length <= 0) {
			return base.sort((a: { price: number }, b: { price: number }) => a.price - b.price).reverse();
		} else {
			return categoryInfo.sort((a: { price: number }, b: { price: number }) => a.price - b.price).reverse();
		}
	}

	const setSortAlphabet = (base: any) => {
		if (categoryInfo.length <= 0) {
			return base.sort(function (a: { name: string }, b: { name: string }) {
				if (a.name < b.name)
					return -1
				if (a.name > b.name)
					return 1
				return 0
			})
		} else {
			return categoryInfo.sort(function (a: { name: string }, b: { name: string }) {
				if (a.name < b.name)
					return -1
				if (a.name > b.name)
					return 1
				return 0
			})
		}
	}

	const setCategory = (base: any) => {
		base.map((item: any) => item.category === category ? categoryInfo.push(item) : item);
		dispatch(setPizza(categoryInfo));
	}

	axios('http://localhost:3000/db.json').then(({ data }) => {
		category >= 0
			? setCategory(data.pizzas)
			: dispatch(setPizza(data.pizzas));
		if (sortBy.type === 'popular') {
			dispatch(setPizza(setSortPopular(data.pizzas)));
		} else if (sortBy.type === 'price') {
			dispatch(setPizza(setSortPrice(data.pizzas)));
		} else if (sortBy.type === 'name') {
			dispatch(setPizza(setSortAlphabet(data.pizzas)));
		}
	}
	)
	//axios(`http://localhost:3001/pizzas?${category >= 0 ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
	//	.then(({ data }) => dispatch(setPizza(data)));
}

export const setLoaded = (payload: boolean) => ({
	type: 'SET_LOADED',
	payload,
});

export const setPizza = (items: any) => ({
	type: 'SET_PIZZAS',
	payload: items,
});