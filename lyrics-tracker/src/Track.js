import React from "react";

class Track extends React.Component {
  state = {
    lyrics: ""
  };

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
        this.props.match.params.id
      }&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          lyrics: data.message.body.lyrics.lyrics_body
        });
      });
  }

  render() {
    const { lyrics } = this.state;
    return (
      <>
        {lyrics ? (
          <div className="display-lyrics">
            <div style={{ textAlign: "left" }}>It goes like..</div>
            <p>{lyrics}</p>
          </div>
        ) : null}
      </>
    );
  }
}

export default Track;
