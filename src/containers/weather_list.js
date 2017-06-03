import React, {Component} from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

    renderWeather(cityData){

        const name = cityData.city.name;
        const temps = cityData.list.map(weather=>weather.main.temp);
        //в градусах //const temps = _.map(cityData.list.map(weather=>weather.main.temp),(temp)=>temp-273);
        const pressures = cityData.list.map(weather=>weather.main.pressure);
        const humidities = cityData.list.map(weather=>weather.main.humidity);
        //ES5
        //const lon = cityData.city.cord.lon;
        //const lat = cityData.city.cord.lat;
        //ES6
        const { lon, lat } = cityData.city.coord;
        
        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }
    render(){
        console.log(this.props.weather);
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );//.map(this.renderWeather) бо приходить масив а не одне значення
    }

}

//ES5
// function mapStateToProps(state){
//     return { weather : state.weather }
// }
// в ES6 
function mapStateToProps({weather}){//const weather = state.weather ES5
    return { weather } //weather : weather ES5
    // {weather} === {weather:weather}
}

export default connect(mapStateToProps)(WeatherList); 