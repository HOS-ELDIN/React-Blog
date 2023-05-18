import React from "react";

const NewPost = ({
	newPostTitle,
	newPostBody,
	setNewPostTitle,
	setNewPostBody,
	handleSubmit,
}) => {
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
