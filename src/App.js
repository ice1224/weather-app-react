import React from "react";
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "b4195a6ab2f69228045387b160d8ed7e";

class App extends React.Component {
  
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    
    this.setState({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    })
  }

  render(){
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
}

export default App;