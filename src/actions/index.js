import axios from 'axios';

const API_KEY = 'd6c84c2bbd5e1e260db4404caf691e8c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},ua`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}