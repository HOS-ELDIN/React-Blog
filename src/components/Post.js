import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
	return (
		<li>
			<Link to={`post/${post.id}`}>
				<h3>{post.title}</h3>
				<p>{post.datetime}</p>
				<p className="post-body">{post.body}</p>
			</Link>
		</li>
	);
};

export default Post;
