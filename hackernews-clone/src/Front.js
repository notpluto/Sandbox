import React from "react";

class Front extends React.Component {
  render() {
    console.log(this.props.beststories);
    const { beststories } = this.props;
    return (
      <div>
        {beststories.map((el, i) => (
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

export default Front;
