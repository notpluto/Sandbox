import React from "react";

class WeatherDetails extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "4rem auto",
          width: "540px"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            {" "}
            <div className="info">Latitude </div>
            {details.coord.lat}
          </div>
          <div>
            {" "}
            <div className="info">Longitude </div>
            {details.coord.lon}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <div className="info">Humidity</div> {details.main.humidity}%
          </div>
          <div>
            <div className="info"> Max Temperature </div>
            {details.main.temp_max} °C
          </div>
          <div>
            <div className="info">Min Temperature</div> {details.main.temp_min}
            °C
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <div className="info">Visibility</div>{" "}
            {details.visibility ? `${details.visibility}m` : "-"}
          </div>
          <div>
            <div className="info">Wind Direction</div>
            {details.wind.deg ? `${details.wind.deg}°` : "-"}
          </div>
          <div>
            <div className="info"> Wind Speed </div>
            {details.wind.speed}m/s
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherDetails;
