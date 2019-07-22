import React from "react";

class KeyPad extends React.Component {
  render() {
    return (
      <div className="parent">
        <div className="inner-grid">
          <div onClick={this.props.handleClick} className="child-grid-items">
            clear
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            =
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            back
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            +
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            7
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            8
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            9
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            -
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            4
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            5
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            6
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            *
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            1
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            2
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            3
          </div>
          <div onClick={this.props.handleClick} className="child-grid-items">
            ÷
          </div>
        </div>
      </div>
    );
  }
}

export default KeyPad;
