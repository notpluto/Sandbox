import React from "react";

class Ask extends React.Component {
  render() {
    const { askstories } = this.props;
    return (
      <div>
        {askstories.map((el, i) => (
          <div key={i}>
            <div className="main-post">
              <li>{el.title}</li>
            </div>
            <div
              className="main-post-footer"
              style={{ paddingTop: "4px", marginLeft: "6px" }}
            >
              <small>{el.score} points</small>
              <small>by {el.by}</small>
              <small>1 hour ago |</small>
              <small>{el.descendants} comments</small>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Ask;
