import React from "react";

import WeatherDetails from "./WeatherDetails";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faCloud,
  faSmog,
  faBolt,
  faUmbrella,
  faSun
} from "@fortawesome/free-solid-svg-icons";

class Forecast extends React.Component {
  state = {
    displayDetails: false
  };

  handleCityWeather = () => {
    this.setState({
      displayDetails: !this.state.displayDetails
    });
  };

  render() {
    const { weatherInfo } = this.props;
    // console.log(weatherInfo, "inside forecast");
    return (
      <div>
        {weatherInfo.main ? (
          <div className="weather-type">
            <div onClick={this.handleCityWeather}>
              <div className="info">City </div>
              {weatherInfo.name}, {weatherInfo.sys.country}
            </div>
            <div>
              <div className="info">Currently </div>
              {weatherInfo.main.temp} °C
            </div>
            <div>
              <div className="info">Prediction</div>
              <div style={{ display: "flex" }}>
                <div> {weatherInfo.weather[0].main} </div>
                <div style={{ color: "skyblue", marginLeft: "1rem" }}>
                  {weatherInfo.weather[0].main === "Mist" ||
                  weatherInfo.weather[0].main === "Haze" ? (
                    <FontAwesomeIcon icon={faSmog} />
                  ) : weatherInfo.weather[0].main === "Drizzle" ? (
                    <FontAwesomeIcon icon={faCloudRain} />
                  ) : weatherInfo.weather[0].main === "Clouds" ? (
                    <FontAwesomeIcon icon={faCloud} />
                  ) : weatherInfo.weather[0].main === "Thunderstorm" ? (
                    <FontAwesomeIcon icon={faBolt} />
                  ) : weatherInfo.weather[0].main === "Rain" ? (
                    <FontAwesomeIcon icon={faUmbrella} />
                  ) : weatherInfo.weather[0].main === "Clear" ? (
                    <FontAwesomeIcon icon={faSun} />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {this.state.displayDetails ? (
          <WeatherDetails details={this.props.weatherInfo} />
        ) : null}
      </div>
    );
  }
}

export default Forecast;
