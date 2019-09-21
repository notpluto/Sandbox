import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { fetchPosts } from "./actions/postActions";

class Posts extends React.Component {
  componentDidMount() {
    // calling the action
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      // this is incorrect as you're mutating it directly
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <p key={post.id}>
        <small>title:</small> {post.title}
        <br />
        <small>body:</small> {post.body}
      </p>
    ));
    return <div>{postItems}</div>;
  }
}

// validations
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  // using 'posts' because this is how we referred it in combineReducer
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
