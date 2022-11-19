import React from "react";


export const Categories = ({ items }: any): JSX.Element => {

	const [activeItem, setActiveItem] = React.useState(-1);

	return (
		<div className="categories">
			<ul>
				<li className={activeItem === -1 ? 'active' : ''} onClick={() => setActiveItem(-1)}>Все</li>
				{items.map((name: string, index: number) =>
					<li
						className={activeItem === index ? 'active' : ''}
						onClick={() => setActiveItem(index)}
						key={`${name}_${index}`}
					>
						{name}
					</li>
				)}
			</ul>
		</div>
	);
}