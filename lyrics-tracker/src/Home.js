import React from "react";
import { NavLink } from "react-router-dom";
import Charts from "./Charts";
import CountryPicker from "./CountryPicker";
import { UserProvider } from "./UserContext";

class Home extends React.Component {
  state = {
    charts: [],
    country: null || "in"
  };

  handleCharts = () => {
    const { country } = this.state;
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?p&callback=callback&country=${country}&apikey=${
        process.env.REACT_APP_MM_KEY
      }`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          charts: data.message.body.track_list
        });
      });
  };

  handleClick = e => {
    this.setState(
      {
        country: e.target.innerText
      },
      () => this.handleCharts() //async call to fetch the charts after state updates
    );
  };

  componentDidMount() {
    this.handleCharts();
  }

  render() {
    const { charts } = this.state;

    return (
      <>
        <UserProvider value={charts}>
          <div className="App">
            <div className="main">
              <h1>Lyrics Tracker</h1>
              <NavLink to="/search">Search</NavLink>
            </div>
          </div>
          <CountryPicker handleClick={this.handleClick} />
          <Charts />
        </UserProvider>
      </>
    );
  }
}

export default Home;
