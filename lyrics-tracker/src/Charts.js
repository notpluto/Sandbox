import React from "react";
import { UserConsumer } from "./UserContext";
import { Link } from "react-router-dom";

class Charts extends React.Component {
  render() {
    return (
      <UserConsumer>
        {value => {
          return (
            <div>
              <p>Top Charts</p>
              <table>
                <thead>
                  <tr>
                    <td>Tracks</td>
                    <td>Artists</td>
                    <td>Albums</td>
                    <td>Lyrics</td>
                  </tr>
                </thead>
                {value.map((el, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{el.track.track_name}</td>
                        <td>{el.track.artist_name}</td>
                        <td>{el.track.album_name}</td>
                        <td>
                          <Link to={`lyrics/track/${el.track.track_id}`}>
                            View
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default Charts;
