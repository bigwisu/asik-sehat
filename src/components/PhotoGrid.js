import React, { Component } from 'react';
import Photo from "./Photo";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
      posts: state.posts
  }
}

class PhotoGrid extends Component {
    render() {
      return (
        <div className="photo-grid">
        {
          this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)
        }
      </div>
      )
    }
 }

 export default connect(mapStateToProps)(PhotoGrid)