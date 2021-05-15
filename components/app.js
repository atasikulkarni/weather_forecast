import React from 'react';
import {Component} from 'react';
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

app.use(express.static(__dirname));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'App.js'));
});

app.listen(port);
console.log(`Server started on port ${port}`);

export default class App extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<WeatherList />
			</div>
		);
	}
}