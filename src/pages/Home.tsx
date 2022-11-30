import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPoput, PizzaItem, PizzaLoading } from '../component';
import { pizzaItemInterface } from '../component/PizzaBlock/PizzaItem';
import { fetchPizza, setLoaded } from '../redux/action/pizzas';
import { setCategory, setSortBy } from '../redux/action/filter';

const categoriesItem = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
	sortByItem = [
		{ name: 'популярности', type: 'popular', order: 'desc' },
		{ name: 'цене', type: 'price', order: 'desc' },
		{ name: 'алфавиту', type: 'name', order: 'asc' }];

export const Home = (): JSX.Element => {
	const dispatch: Function = useDispatch();
	const { items, isLoaded, category, sortBy } = useSelector(({ pizzas, filter }: any) => {
		return {
			items: pizzas.items,
			isLoaded: pizzas.isLoaded,
			category: filter.category,
			sortBy: filter.sortBy,
		}
	});

	React.useEffect(() => {
		dispatch(setLoaded(false));
		setTimeout(() => dispatch(fetchPizza(category, sortBy)), 500)
	}, [category, sortBy]);

	const selectCategory = React.useCallback((index: number) => {
		dispatch(setCategory(index));
	}, [])

	const selectSort = React.useCallback((type: string) => {
		dispatch(setSortBy(type));
	}, []);

	const onClickAddPizza = (obj: any) => {
		console.log(obj);
	}

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
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoaded
					? items.map((pizza: pizzaItemInterface) => <PizzaItem key={pizza.id} {...pizza} onClickAddPizza={onClickAddPizza} />)
					: Array(10).fill(0).map((_, index) => <PizzaLoading key={index} />)
				}
			</div>
		</div>
	);
}