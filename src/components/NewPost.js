import React, { useState, useContext } from "react";
import DataContext from "../context/DataContext";

const NewPost = () => {
	const { posts, setPosts, format, api, navigate } = useContext(DataContext);
	const [newPostTitle, setNewPostTitle] = useState("");
	const [newPostBody, setNewPostBody] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newPostId = posts.length ? posts[posts.length - 1].id + 1 : 1;
		const newPostDateTime = format(new Date(), "MMMM dd, yyyy pp");
		const newPost = {
			id: newPostId,
			title: newPostTitle,
			datetime: newPostDateTime,
			body: newPostBody,
		};

		try {
			// const response = await api.post("/posts", newPost);
			const newPostsList = [...posts, newPost];

			const response = await api.put("/?meta=false", newPostsList, {
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
			// setPosts(newPostsList);

			
			setNewPostTitle("");
			setNewPostBody("");
			navigate(`/post/${newPostId}`);
			// console.log(response.data);
		} catch (err) {
			console.log(`Error:${err.message}`);
		}
	};
	return (
		<main>
			<h2>New POST</h2>
			<form className="new-post" onSubmit={handleSubmit}>
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					required
					value={newPostTitle}
					onChange={(e) => setNewPostTitle(e.target.value)}
				/>
				<label htmlFor="post">Post:</label>
				<textarea
					id="post"
					required
					value={newPostBody}
					onChange={(e) => setNewPostBody(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</main>
	);
};

export default NewPost;
