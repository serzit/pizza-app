import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {Route} from 'react-router-dom';
import {Header} from './components';
import {Cart, Home} from './pages';
import {setPizzas } from './redux/actions/pizzas';
import store from './redux/store';

class App extends React.Component {
	componentDidMount() {
		axios.get('http://localhost:3000/pizza-app/db.json')
		.then(({data}) => {
			this.props.setPizzas(data.pizzas)
		});
	}

	render() {
		return (
			<div className="wrapper">
				<Header/>
				<div className="content">
					<Route path="/" render={() => <Home items={this.props.items}/>} exact/>
					<Route path="/cart" component={Cart} exact/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.pizzas.items,
		filters: state.filters
	}
}

const mapDispatchToProps = {
	setPizzas,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
