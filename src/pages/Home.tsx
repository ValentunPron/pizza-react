import React from 'react'

import { Categories, SortPoput, PizzaItem } from '../component';
import { pizzaItemInterface } from '../component/PizzaItem';
import { setCategory } from '../redux/action/filter';

const categoriesItem = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
	sortByItem = [
		{ name: 'популярности', type: 'popular' },
		{ name: 'цене', type: 'price' },
		{ name: 'алфавиту', type: 'alfabet' }];

export const Home = ({ pizzas, dispatch }: any): JSX.Element => {

	const selectCategory = React.useCallback((index: number) => {
		dispatch(setCategory(index));
	}, [])

	return (
		<div className="container">
			<div className="content__top">
				<Categories clickIndex={selectCategory}
					items={categoriesItem}
				/>
				<SortPoput items={sortByItem} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{pizzas.map((pizza: pizzaItemInterface) => <PizzaItem key={pizza.id} {...pizza} />)}
			</div>
		</div>
	);
}