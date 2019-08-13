import React from "react";
import { Link } from "react-router-dom";

class Search extends React.Component {
  state = {
    input: "",
    lyrics: ""
  };

  handleLyrics = e => {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  };

  fetchLyrics = e => {
    const { input } = this.state;
    if (e.key === "Enter" && input !== "") {
      e.preventDefault();
      console.log(e.key, "called inside lyrics");
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?p&callback=callback&q_track=${input}&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            lyrics: data.message.body.lyrics.lyrics_body
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { lyrics } = this.state;
    return (
      <>
        <div className="track-search">
          <form onKeyPress={this.fetchLyrics}>
            <input
              type="text"
              value={this.state.input}
              placeholder="Enter song title"
              onChange={this.handleLyrics}
            />
          </form>
          {lyrics ? (
            <div className="display-lyrics">
              <p>{lyrics}</p>
            </div>
          ) : null}
        </div>

        <Link to="/">Back</Link>
      </>
    );
  }
}

export default Search;
