import React from "react";

const country = [
  "in",
  "us",
  "uk",
  "de",
  "is",
  "jp",
  "jm",
  "np",
  "nl",
  "cn",
  "ca",
  "fr",
  "ru",
  "ch",
  "vn",
  "uy"
];

class CountryPicker extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          {country.map((el, index) => {
            return (
              <div key={index} className="container">
                <button onClick={this.props.handleClick}>{el}</button>
              </div>
            );
          })}
          <br />
          <small style={{ margin: "0 auto", textAlign: "center" }}>
            (Pick a country to see what's trending)
          </small>
        </div>
      </>
    );
  }
}

export default CountryPicker;
