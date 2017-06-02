import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        //якщо викликати не з arrow функцій то треба писати так
        //бо буде помилка. Якщо колбек і з іншої функції this то треба bind
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value}); //без зміни стану тексту не змінюється значення в input
    }

    onFormSubmit(e){
        e.preventDefault();
        console.log(this.state.term);

        //отримати дату погоди
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''}); //очистити input оскільки нижче в render нас value={this.state.term} 
        //в network в хромі можна подивитись результат запроса після сабміта

    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}  className="input-group">
                    <input type="text"
                        placeholder="get a five-day forecast in your favorite cities" 
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);