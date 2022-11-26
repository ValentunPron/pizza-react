import { Categories, SortPoput, PizzaItem } from '../component';
import { pizzaItemInterface } from '../component/PizzaItem';

export const Home = ({ pizzas }: any): JSX.Element => {
	return (
		<div className="container">
			<div className="content__top">
				<Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
				<SortPoput items={[
					{ name: 'популярности', type: 'popular' },
					{ name: 'цене', type: 'price' },
					{ name: 'алфавиту', type: 'alfabet' }]}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{pizzas.map((pizza: pizzaItemInterface) => <PizzaItem key={pizza.id} {...pizza} />)}
			</div>
		</div>
	);
}