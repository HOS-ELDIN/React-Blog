import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const PostPage = () => {
	const { posts, setPosts, navigate, api } = useContext(DataContext);
	const { id } = useParams();
	const post = posts.find((post) => post.id.toString() === id);

	const handleDelete = async (id) => {
		try {
			// const response = await api.delete(`/posts/${id}`);
			const newPosts = posts.filter((post) => post.id !== id);

			const response = await api.put("/?meta=false", newPosts, {
				headers: {
					"Content-Type": "application/json",
					"X-Master-Key":
						"$2b$10$8af8yHYa/LJMqrWJLC/6iu29hjtZua92yI8.vlPwWZBj/SE4kz4TO",
					"X-Access-Key":
						"$2b$10$DQz6C.Oi0RiKI0DsXfxykejGH0qpGf/dob3KYU9Xni0xBZ2dUWwEa",
				},
			});

			// console.log(response);

			setPosts(response.data.record);

			// setPosts(newPosts);
			navigate("/");
			// console.log(response);
		} catch (err) {
			console.log(`Error:${err.message}`);
		}
	};

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
							<Link to={`/edit/${post.id}`}>
								<button>Edit</button>
							</Link>
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
