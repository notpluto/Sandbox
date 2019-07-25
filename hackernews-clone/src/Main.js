import React from "react";

class Main extends React.Component {
  render() {
    const { topstories } = this.props;

    return (
      <div>
        {topstories.map((el, i) => (
          <div key={i}>
            <div className="main-post">
              <li>
                <a href={el.url}>{el.title}</a>
              </li>
              <div>({el.url})</div>
            </div>
            <div className="main-post-footer">
              <small>{el.score} points</small>
              <small>by {el.by}</small>
              <small>1 hour ago |</small>
              <small>hide |</small>
              <small>{el.descendants} comments</small>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Main;
