import React from "react";


export const Categories = React.memo(({ items, clickIndex }: any): JSX.Element => {

	const [activeItem, setActiveItem] = React.useState(-1);

	const onSelectIndex = (index: number) => {
		setActiveItem(index)
		clickIndex(index);
	}

	return (
		<div className="categories">
			<ul>
				<li className={activeItem === -1 ? 'active' : ''}
					onClick={() => onSelectIndex(-1)}
				>
					Все
				</li>
				{items.map((name: string, index: number) =>
					<li
						className={activeItem === index ? 'active' : ''}
						onClick={() => onSelectIndex(index)}
						key={`${name}_${index}`}
					>
						{name}
					</li>
				)}
			</ul>
		</div>
	);
});