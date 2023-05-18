import React from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
	const { id } = useParams();
	const post = posts.find((post) => post.id.toString() === id);
	const navigate = useNavigate();
	return (
		<main>
			<article className="post-details">
				{post && (
					<>
						<h2>{post.title}</h2>
						<p className="date-time">{post.datetime}</p>
						<p>{post.body}</p>
						<div className="buttons">
							<button className="back-button" onClick={() => navigate("/")}>
								Home
							</button>
							<button
								className="delete-button"
								onClick={() => handleDelete(post.id)}
							>
								delete
							</button>
						</div>
					</>
				)}
				{!post && (
					<>
						<h2>Post Not Found</h2>
						<p>Well, That's disappointing.</p>
						<p>
							<Link className="home-link" to="/">
								Visit Our Homepage
							</Link>
						</p>
					</>
				)}
			</article>
		</main>
	);
};

export default PostPage;
