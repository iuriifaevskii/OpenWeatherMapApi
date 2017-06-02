import React, {Component} from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name;
        return(
            <tr key={name}>
                <td>{name}</td>
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
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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