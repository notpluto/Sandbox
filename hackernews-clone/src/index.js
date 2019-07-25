import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { withRouter } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Newest from "./Newest";
import Front from "./Front";
import Ask from "./Ask";
import Show from "./Show";
import Jobs from "./Jobs";
import Submit from "./Submit";
import Comments from "./Comments";
import Pagination from "./Pagination";
import Loading from "./Loading";

import "./styles.css";
import "./loader.css";

const HN_api = "https://hacker-news.firebaseio.com/v0/";
const stories = [
  "topstories",
  "newstories",
  "beststories",
  "askstories",
  "showstories",
  "jobstories"
];

class App extends React.Component {
  state = {
    topstories: [],
    newstories: [],
    beststories: [],
    askstories: [],
    showstories: [],
    jobstories: [],
    currentPage: 1,
    loading: true
  };

  componentDidMount() {
    this.fetchEveything();
  }

  fetchEveything = () => {
    const { currentPage } = this.state;
    stories.forEach(story => {
      this.setState({ [story]: [] });
      fetch(`${HN_api}${story}.json`)
        .then(res => res.json())
        .then(items => {
          items.slice(currentPage * 20 - 20, currentPage * 20).forEach(item => {
            fetch(`${HN_api}/item/${item}.json`)
              .then(res => res.json())
              .then(data => {
                this.setState(state => {
                  return {
                    [story]: [...state[story], data],
                    loading: false
                  };
                });
              });
          });
        });
    });
  };

  updatePage = pageNo => {
    // console.log(pageNo, "inside index");
    this.setState({ currentPage: pageNo });
    this.fetchEveything();
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <Router>
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Main topstories={this.state.topstories} {...props} />
                )}
              />
              <Route
                path="/newest"
                render={props => (
                  <Newest newstories={this.state.newstories} {...props} />
                )}
              />
              <Route
                path="/front"
                render={props => (
                  <Front beststories={this.state.beststories} {...props} />
                )}
              />
              <Route path="/newcomments" component={Comments} />
              <Route
                path="/ask"
                render={props => (
                  <Ask askstories={this.state.askstories} {...props} />
                )}
              />
              <Route
                path="/show"
                render={props => (
                  <Show showstories={this.state.showstories} {...props} />
                )}
              />
              <Route
                path="/jobs"
                render={props => (
                  <Jobs jobstories={this.state.jobstories} {...props} />
                )}
              />
              <Route path="/submit" component={Submit} />
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
