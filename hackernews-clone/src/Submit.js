import React from "react";

class Submit extends React.Component {
  render() {
    return (
      <div>
        <div className="submit">
          <div>You have to be logged in to submit.</div>
          <div style={{ fontWeight: "bold" }}>Login</div>
          <form className="login">
            <div>
              <label htmlFor="username">username:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="password">password:</label>
              <input type="password" />
            </div>
            <button>submit</button>
          </form>
          {/* eslint-disable-next-line */}
          <a href="#">Forgot your password?</a>
          <div style={{ fontWeight: "bold" }}>Create account</div>
          <form className="login">
            <div>
              <label htmlFor="username">username:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="password">password:</label>
              <input type="password" />
            </div>
            <button>create account</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Submit;
