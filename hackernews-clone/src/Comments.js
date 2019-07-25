import React from "react";

const HN_api = "https://hacker-news.firebaseio.com/v0/";
const stories = [
  "topstories",
  "newstories",
  "beststories",
  "askstories",
  "showstories",
  "jobstories"
];
// var allItems = [];

class Comments extends React.Component {
  state = {
    comments: [],
    currentPage: 1
  };

  fetchKids = async () =>
    stories.forEach(story => {
      fetch(`${HN_api}${story}.json`)
        .then(res => res.json())
        .then(items => {
          items
            .splice(
              this.state.currentPage * 20 - 20,
              this.state.currentPage * 20
            )
            .forEach(item => {
              fetch(`${HN_api}/item/${item}.json`)
                .then(res => res.json())
                .then(data => {
                  data.kids &&
                    data.kids.slice(0, 10).forEach(kid => {
                      fetch(`${HN_api}/item/${kid}.json`)
                        .then(res => res.json())
                        .then(data => {
                          // creating a copy of comments array
                          let newArr = this.state.comments.slice();
                          newArr.push(data);
                          this.setState({
                            comments: newArr
                          });
                        });
                    });
                });
            });
        });
    });

  componentDidMount() {
    this.fetchKids();
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <div>
          {comments.slice(0, 30).map((el, i) => (
            <div key={i}>
              <div
                className="main-post-footer"
                style={{ padding: "0px", marginTop: "10px" }}
              >
                <small>{el.by}</small>
                <small>1 hour ago |</small>
                <small>
                  <a href={`https://news.ycombinator.com/item?id=${el.parent}`}>
                    parent
                  </a>
                </small>
              </div>
              <div className="main-post">
                <div style={{ color: "black", fontSize: "0.8rem" }}>
                  {el.text
                    ? el.text.replace(/<[^>&]*>?/gm, "").slice(0, 250)
                    : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Comments;
