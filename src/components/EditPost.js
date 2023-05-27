import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const EditPost = () => {
	const { posts, format, api, setPosts, navigate } = useContext(DataContext);
	const [editTitle, setEditTitle] = useState("");
	const [editBody, setEditBody] = useState("");
	const { id } = useParams();
	const post = posts.find((post) => post.id.toString() === id);

	useEffect(() => {
		if (post) {
			setEditTitle(post.title);
			setEditBody(post.body);
		}
	}, [post, setEditTitle, setEditBody]);

	const handleEdit = async (id) => {
		const datetime = format(new Date(), "MMMM dd, yyyy pp");
		const updatedPost = {
			id,
			title: editTitle,
			datetime,
			body: editBody,
		};
		try {
			const response = await api.put(`/posts/${id}`, updatedPost);

			setPosts(
				posts.map((post) =>
					post.id.toString() === id ? { ...response.data } : post
				)
			);
			setEditTitle("");
			setEditBody("");
			navigate(`/post/${id}`);
		} catch (err) {}
	};

	return (
		<main>
			{editTitle && (
				<>
					<h2>Edit POST</h2>
					<form className="new-post" onSubmit={(e) => e.preventDefault()}>
						<label htmlFor="title">Title:</label>
						<input
							type="text"
							id="title"
							required
							value={editTitle}
							onChange={(e) => setEditTitle(e.target.value)}
						/>
						<label htmlFor="post">Post:</label>
						<textarea
							id="post"
							required
							value={editBody}
							onChange={(e) => setEditBody(e.target.value)}
						/>
						<button type="submit" onClick={() => handleEdit(id)}>
							Submit
						</button>
					</form>
				</>
			)}
			{!editTitle && (
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
		</main>
	);
};

export default EditPost;
