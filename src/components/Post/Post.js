import { Avatar } from "@mui/material";
import React, { Component } from "react";
import "./Post.css";
import PostImg from '../../images/post.jpg'
import love from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'

class Post extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return <div className="post__container">
        {/* Header */}
        <div className="post__header">
            <Avatar className="post__avtar"/>
            <div className="post__username">Username</div>
        </div>

        {/* Content */}
        <div>
            <img className="post__img" src={PostImg} alt="" />
        </div>

        {/* Analytics */}
        <div>
            <div>
                <img src={love} alt="" />
                <img src={comment} alt="" />
                <img src={share} alt="" />
            </div>
        </div>

        {/* Comment */}
        <div></div>
    </div>;
  }
}

export default Post;
