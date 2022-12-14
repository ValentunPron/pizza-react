import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPoput, PizzaItem, PizzaLoading } from '../component';
import { pizzaItemInterface } from '../component/PizzaBlock/PizzaItem';
import { fetchPizza, setLoaded } from '../redux/action/pizzas';
import { setCategory, setSortBy } from '../redux/action/filter';
import { addPizzaCart } from '../redux/action/cart';

const categoriesItem = ["М'ясні", 'Вегетаріанська', 'Гриль', 'Гострі', 'Закриті'],
	sortByItem = [
		{ name: 'популярності', type: 'popular', order: 'desc' },
		{ name: 'ціні', type: 'price', order: 'desc' },
		{ name: 'алфавіту', type: 'name', order: 'asc' }];

export const Home = (): JSX.Element => {
	const dispatch: Function = useDispatch();
	const { items, isLoaded, category, sortBy, itemsCart } = useSelector(({ pizzas, filter, cart }: any) => {
		return {
			items: pizzas.items,
			isLoaded: pizzas.isLoaded,
			category: filter.category,
			sortBy: filter.sortBy,
			itemsCart: cart.items,
		}
	});

	React.useEffect(() => {
		dispatch(setLoaded(false));
		setTimeout(() => dispatch(fetchPizza(category, sortBy)), 250);
	}, [category, sortBy]);

	const selectCategory = React.useCallback((index: number) => {
		dispatch(setCategory(index));
	}, [])

	const selectSort = React.useCallback((type: string) => {
		dispatch(setSortBy(type));
	}, []);


	const onClickAddPizza = React.useCallback((obj: any) => {
		dispatch(addPizzaCart(obj));
	}, []);


	return (
		<div className="container">
			<div className="content__top">
				<Categories
					activeCategories={category}
					clickCategories={selectCategory}
					items={categoriesItem}
				/>
				<SortPoput
					activeSort={sortBy.type}
					clickSort={selectSort}
					items={sortByItem}
				/>
			</div>
			<h2 className="content__title">Всі піци</h2>
			<div className="content__items">
				{isLoaded
					? items.map((pizza: pizzaItemInterface) =>
						<PizzaItem
							key={pizza.id}
							{...pizza}
							onClickAddPizza={onClickAddPizza}
							addedCart={(id: number) => itemsCart[id] && itemsCart[id].items.length}
						/>)
					: Array(10).fill(0).map((_, index) =>
						<PizzaLoading key={index} />)
				}
			</div>
		</div>
	);
}