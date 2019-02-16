import React, { Component } from 'react';
import { connect } from "react-redux";

import Photo from './Photo';
import Comments from './Comments';

const mapStateToProps = (state) => {
  return {
      posts: state.posts,
      comments: state.comments
  }
}

class Single extends Component {
    render() {
        const { postId } = this.props.match.params;

        const i = this.props.posts.findIndex((post) => post.code === postId);
        const post = this.props.posts[i];

        const postComments =  this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>
        )
    }
};


export default connect(mapStateToProps)(Single)