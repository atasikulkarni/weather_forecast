import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import "../components/weather.css";

export default class WeatherList extends Component {
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat } = cityData.city.coord;

		return (
			<div>
            <tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td> <Chart data={temps} color="red" units="°C"/></td>
				<td> <Chart data={humidities} color="blue" units="%"/></td>
				<td> <Chart data={pressures} color="green" units="hPa"/></td>
			</tr>
			<h4>Select City</h4>
      <select className="listOfCities">
         <option value="volvo">List Of Cities</option>
        <option value="saab">Delhi</option>
        <option value="mercedes">Mumbai</option>
        <option value="audi">Pune</option>
        <option value="audi">Chennai</option>
        <option value="audi">Bangalore</option>
      </select>

      <div className="section">
        <div className="left">
          <h3>Current Weather Data</h3>
        </div>
        <div className="right">
          <h3>5 Days Weather Forecast</h3>
        </div>
        
      </div>
      <button className="button-submit" onClick={AboutWeather()}>About Us</button>
      <div>

      </div>
			</div>
			
			
		);
	}

	render(){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th className="">City</th>
						<th className="">Temperature (Celcius)</th>
						<th className="">Humidity (%)</th>
						<th className="">Pressure (hPa)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}


function mapStateToProps({weather}){
	return {weather}
	// return {weather: weather};
}

// function mapStateToProps(state){
// 	return {weather: state.weather};
// }



export default connect(mapStateToProps)(WeatherList);