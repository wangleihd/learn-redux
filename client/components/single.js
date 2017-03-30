import React, { Component } from 'react';
import Photo from './photo';
import Comments from './comments';

class Single extends Component {
  render() {
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments}/>
      </div>
    );
  }
}

export default Single;
