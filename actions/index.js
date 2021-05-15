import axios from 'axios';

const API_KEY = 'ed19d1d119c768cdd050fc172a07ccab';
const ROOT_URL = `https://openweathermap.org/api=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us&units=metric`;
	const request = axios.get(url); // will return a promise


	return {
		type: FETCH_WEATHER,
		payload: request 
	};
}