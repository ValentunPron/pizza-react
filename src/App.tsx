import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from './component';
import { Home, Cart } from './pages';
import { setPizza } from './redux/action/pizzas';

function App() {
	const dispatch = useDispatch();
	const { items, sortBy } = useSelector(({ pizzas, filter }: any) => {
		return {
			items: pizzas.items,
			sortBy: filter.sortBy,
		}
	});

	React.useEffect(() => {
		axios('http://localhost:3001/pizzas').then(({ data }) => dispatch(setPizza(data)));
	}, [])

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home pizzas={items} dispatch={dispatch} />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
