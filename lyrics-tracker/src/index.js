import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./styles.scss";
import Home from "./Home";
import Track from "./Track";
import Search from "./Search";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/track" component={Track} />
            <Route path="/search" component={Search} />
            <Route exact path="/lyrics/track/:id" component={Track} />
          </Switch>
        </Router>
      </>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
