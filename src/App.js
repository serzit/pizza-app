import React from 'react';
import {Route} from 'react-router-dom';

import {Header} from './components';
import {Cart, Home} from './pages';

function App() {
	const [pizzaItems, setPizzaItems] = React.useState([]);

	React.useEffect(() => {
		fetch('http://localhost:3000/pizza-app/db.json')
		.then(resp => resp.json())
		.then(json => {
			setPizzaItems(json.pizzas)
		})
	}, []);

	return (
		<div className="wrapper">
			<Header/>
			<div className="content">
				<Route path="/" render={() => <Home items={pizzaItems}/>} exact/>
				<Route path="/cart" render={() => <Cart/>} exact/>
			</div>
		</div>
	);
}

export default App;
