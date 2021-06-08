import React from 'react'
import { Link } from 'react-router'
import Comments from './Comments'
import Photo from './Photo'

const Single = React.createClass({
  render() {
    const { postId } = this.props.params
    const i = this.props.posts.findIndex((post) => post.code === postId)
    const post = this.props.posts[i]
    const postComments = this.props.comments[postId] || []
    console.log(postId, postComments, this.props.comments);

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} />
      </div>
    )
  }
})

export default Single;