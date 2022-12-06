import axios from 'axios';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './component';
import { Home, Cart } from './pages';

function App() {
	const [test, setTest]: any = React.useState([]);

	React.useEffect(() => {
		axios('http://localhost:3000/db.json').then(({ data }) => setTest(data.pizzas));
	}, [])

	//console.log(test.sort((a: { price: any }, b: any) => a.price - b.price).reverse());
	//console.log(test.sort((a: { rating: any }, b: any) => a.rating - b.rating).reverse());


	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
