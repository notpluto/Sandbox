import React from "react";
import ReactDOM from "react-dom";

import KeyPad from "./KeyPad";
import Result from "./Result";
import "./styles.css";

class App extends React.Component {
  state = {
    result: ""
  };

  handleClick = e => {
    if (e.target.innerText === "=") {
      this.handleResult();
    } else if (e.target.innerText === "back") {
      this.handleBackspace();
    } else if (e.target.innerText === "clear") {
      this.handleClear();
    } else {
      this.setState({
        result: this.state.result + e.target.innerText
      });
    }
  };

  handleResult = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: eval(this.state.result || "")
      });
    } catch (error) {
      this.setState({
        result: "error"
      });
    }
  };

  handleClear = () => {
    this.setState({
      result: ""
    });
  };

  handleBackspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">Basic Calculator</div>
        <Result result={this.state.result} />
        <KeyPad handleClick={this.handleClick} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
