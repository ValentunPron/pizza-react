import React from "react";


export const Categories = ({ items }: any): JSX.Element => {

	const [activeItem, setActiveItem] = React.useState(0);

	return (
		<div className="categories">
			<ul>
				<li onClick={() => alert('Все')}>Все</li>
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