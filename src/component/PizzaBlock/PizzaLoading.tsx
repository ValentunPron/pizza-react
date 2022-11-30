import ContentLoader from "react-content-loader"

export const PizzaLoading = (): JSX.Element => {
	return (
		<ContentLoader
			speed={2}
			width={280}
			height={500}
			viewBox="0 0 280 500"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="139" cy="133" r="130" />
			<rect x="0" y="259" rx="0" ry="0" width="0" height="25" />
			<rect x="7" y="278" rx="6" ry="6" width="280" height="26" />
			<rect x="0" y="325" rx="16" ry="16" width="280" height="85" />
			<rect x="8" y="439" rx="6" ry="6" width="100" height="27" />
			<rect x="125" y="429" rx="25" ry="25" width="150" height="43" />
		</ContentLoader>
	)
}