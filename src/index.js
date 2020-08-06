import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import './scss/app.scss'

import App from './App';
import {Header} from './components';

ReactDOM.render(
	<BrowserRouter>
		<Route exact path="/" component={App}/>
		<Route exact path="/header" component={Header} />
	</BrowserRouter>,
	document.getElementById('root')
)