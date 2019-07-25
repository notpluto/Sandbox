import React from "react";

import Pagination from "./Pagination";

class Newest extends React.Component {
  render() {
    const { newstories } = this.props;
    // console.log(this.props.newstories, "newest");
    return (
      <div>
        {newstories.map((el, i) => (
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
              <small>past |</small>
              <small>
                <a
                  href={`https://google.com/search?q=${el.title}`}
                  style={{ color: "#828282" }}
                >
                  web{" "}
                </a>{" "}
                |
              </small>
              <small>discuss |</small>
              <small>{el.descendants} comments</small>
            </div>
          </div>
        ))}
        <Pagination updatePage={this.updatePage} />
      </div>
    );
  }
}

export default Newest;
