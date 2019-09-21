import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createPosts } from "./actions/postActions";

class PostForm extends React.Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    // dispatch action here
    this.props.createPosts(post);
  };

  render() {
    return (
      <div>
        <h2>Add Posts</h2>
        <form onSubmit={this.onSubmit}>
          <label>title:</label>
          <br />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />{" "}
          <br />
          <br />
          <label>body:</label>
          <br />
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.onChange}
          />{" "}
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
      </div>
    );
  }
}

PostForm.propTypes = {
  createPosts: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPosts }
)(PostForm);
