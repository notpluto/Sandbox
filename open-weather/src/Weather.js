import React from "react";

import Forecast from "./Forecast";

class Weather extends React.Component {
  state = {
    city: "",
    weather: [],
    cachedCity: ""
  };

  handleCity = e => {
    e.preventDefault();
    this.setState({ city: e.target.value });
    // localStorage.setItem("city", JSON.stringify(`${this.state.city}`));
  };

  handleSubmit = e => {
    if (e.key === "Enter" && this.state.input !== "") {
      e.preventDefault();
      // console.log("called");
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          this.state.city
        }&units=metric&APPID=bfc8370c01b46499cfe3d79c70d93b87`
      )
        .then(res => res.json())
        .then(data =>
          this.setState({
            weather: data
          })
        )
        .catch(error => console.log(error));
    }
  };

  render() {
    return (
      <div>
        <div className="App">
          <form onKeyPress={this.handleSubmit}>
            <input
              type="text"
              value={this.state.city}
              onChange={this.handleCity}
            />
          </form>
          <small>(Type in a city and press Enter)</small>
        </div>
        <Forecast weatherInfo={this.state.weather} />
      </div>
    );
  }
}

export default Weather;
