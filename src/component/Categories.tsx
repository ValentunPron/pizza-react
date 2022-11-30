import React from "react";

interface categoriesInterface {
	activeCategories: number,
	items: string[],
	clickCategories: Function,
}

export const Categories = React.memo(({ activeCategories, items, clickCategories }: categoriesInterface): JSX.Element => {

	return (
		<div className="categories">
			<ul>
				<li className={activeCategories === -1 ? 'active' : ''}
					onClick={() => clickCategories(-1)}
				>
					Все
				</li>
				{items.map((name: string, index: number) =>
					<li
						className={activeCategories === index ? 'active' : ''}
						onClick={() => clickCategories(index)}
						key={`${name}_${index}`}
					>
						{name}
					</li>
				)}
			</ul>
		</div>
	);
});