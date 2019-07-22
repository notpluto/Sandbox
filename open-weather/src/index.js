import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Weather from "./Weather";
import "./styles.css";
// import WeatherDetails from "./WeatherDetails";
// import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">Weather App</div>
        <Weather />
        {/* <Router>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link> */}
        {/* <Switch>
            <Route exact path="/about" component={Home} />
            <Route path="/contact" component={WeatherDetails} />
          </Switch>
        </Router> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
