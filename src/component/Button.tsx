interface buttonInterface {
	onClick?: any
	buttonCart: string,
	outline?: boolean,
	children: any,
}

export const Button = ({ onClick, buttonCart, outline, children }: buttonInterface): JSX.Element => {
	return (
		<button
			onClick={onClick}
			className={`button ${buttonCart} ${outline
				? 'button--outline' : ''}`}>
			{children}
		</button>
	);
}