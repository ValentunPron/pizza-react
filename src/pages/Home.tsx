import { Categories, SortPoput, PizzaItem } from '../component';
import { pizzaItemInterface } from '../component/PizzaItem';

export const Home = ({ pizzas }: any): JSX.Element => {
	return (
		<div className="container">
			<div className="content__top">
				<Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
				<SortPoput items={['популярности', 'цене', 'алфавиту']} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{pizzas.map((pizza: pizzaItemInterface) => <PizzaItem key={pizza.id} {...pizza} />
				)}
			</div>
		</div>
	);
}