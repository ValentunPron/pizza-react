import React from "react"
import { Button } from "../Button";

export interface pizzaItemInterface {
	id?: number,
	name: string,
	imageUrl: string,
	types: number[],
	sizes: number[],
	price: number,
	category: number,
	rating?: number,
	onClickAddPizza: Function,
	addedCart: any
}

export const PizzaItem = ({ id, name, imageUrl, types, sizes, price, category, rating, onClickAddPizza, addedCart }: pizzaItemInterface) => {

	const [activeItem, setActiveItem] = React.useState(types[0]);
	const [activeSize, setActiveSize] = React.useState(sizes[0]);

	const typesName = ['тонкое', 'традиционное'];
	const sizeItem = [26, 30, 40]

	const onSelectType = (index: number) => {
		setActiveItem(index);
	}

	const onSelectSize = (index: number) => {
		setActiveSize(index);
	}

	const onAddPizza = () => {
		const pizza = {
			id,
			name,
			imageUrl,
			price,
			type: typesName[activeItem],
			size: activeSize,
		}
		onClickAddPizza(pizza);
	}

	return (
		<div className="pizza-block">
			<img
				className="pizza-block__image"
				src={imageUrl}
				alt="Pizza"
			/>
			<h4 className="pizza-block__title">{name}</h4>
			<div className="pizza-block__selector">
				<ul>
					{typesName.map((type: string, index: number) => (
						<li
							onClick={() => onSelectType(index)}
							className={`${activeItem === index ? 'active' : ''} ${!types.includes(index) ? 'disible' : ''}`}
							key={type}
						>
							{type}
						</li>))}
				</ul>
				<ul>
					{sizeItem.map((size: number, index: number) => (
						<li
							onClick={() => onSelectSize(sizeItem[index])}
							className={`${activeSize === sizeItem[index] ? 'active' : ''} ${!sizes.includes(size) ? 'disible' : ''}`}
							key={size}
						>
							{size} см
						</li>))}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {price} ₽</div>
				<Button onClick={onAddPizza} buttonCart="button--add" outline>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					{addedCart(id) && <i>{addedCart(id)}</i>}
				</Button>
			</div>
		</div>
	)
}