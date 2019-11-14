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
    wind: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
   
    if (data.cod === 200){
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].main,
        error: ""
      })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        error: "Please enter the correct location"
      })
    }

  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 title-container">
              <Titles/>
            </div>
            <div className="col-md-7 form-container">
              <Form getWeather={this.getWeather}/>
              <Weather 
                city={this.state.city} 
                country={this.state.country}
                temperature={this.state.temperature}
                humidity={this.state.humidity}
                wind={this.state.wind}
                description={this.state.description}
                error={this.state.error} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;