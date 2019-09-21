import React from "react";
import ShapeGenerator from "./ShapeGenerator";

class ColorPicker extends React.Component {
  state = {
    colorCode: "",
    activeClass: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    if (e.key === "Enter" && this.state.colorCode !== "") {
      e.preventDefault();
      this.setState({
        activeClass: true
      });
    }
  };

  render() {
    const { colorCode } = this.state;
    return (
      <>
        <div>
          <form onKeyPress={this.handleSubmit}>
            <input
              placeholder="Enter Hex Code staring with #"
              name="colorCode"
              value={this.state.colorCode}
              onChange={this.handleChange}
            />
          </form>
          <div
            style={{ background: `${colorCode}` }}
            className={
              this.state.activeClass ? " hexcolor make-it-circle" : "hexcolor"
            }
          />
        </div>
      </>
    );
  }
}

export default ColorPicker;
