interface buttonInterface {
	buttonCart: string,
	outline?: boolean,
	children: any,
}

export const Button = ({ buttonCart, outline, children, ...props }: buttonInterface): JSX.Element => {
	return (
		<button className={`button ${buttonCart} ${outline ? 'button--outline' : ''}`}>
			{children}
		</button>
	);
}