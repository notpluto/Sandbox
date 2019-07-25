import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          src="https://pbs.twimg.com/profile_images/1677389022/newsycbot_400x400.gif"
          alt="HN"
          height="25px"
        />
        <div className="header-front">
          <Link to="/" className="nav-link-head">
            Hacker News
          </Link>
        </div>
        <div className="header-menu">
          <Link to="/newest" className="nav-link">
            new
          </Link>
          |
        </div>
        <div className="header-menu">
          <Link to="/front" className="nav-link">
            past
          </Link>
          |
        </div>
        <div className="header-menu">
          <Link to="/newcomments" className="nav-link">
            comments
          </Link>
          |
        </div>
        <div className="header-menu">
          <Link to="/ask" className="nav-link">
            ask
          </Link>
          |
        </div>
        <div className="header-menu">
          <Link to="/show" className="nav-link">
            show
          </Link>
          |
        </div>
        <div className="header-menu">
          <Link to="/jobs" className="nav-link">
            jobs
          </Link>
          |
        </div>
        <div className="header-menu">
          <Link to="/submit" className="nav-link">
            submit
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
