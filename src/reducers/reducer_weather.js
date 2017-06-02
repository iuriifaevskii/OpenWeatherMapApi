import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    console.log('action received', action);

    switch(action.type){
        case FETCH_WEATHER:
        console.log([action.payload.data, ...state]);
        return [action.payload.data, ...state]; //[city, city, city] NOT [city, [city,city]]
        // Не можна маніпулювати існуючим STATE! state.push( action.payload );
        // state.concat([action.state.data]) - правильніше! але в ES6 робимо ...
        // але так не робимо бо можна тільки робити setState! 
        // повертаємо новий масив з +1 містом!
    }

    return state;
}