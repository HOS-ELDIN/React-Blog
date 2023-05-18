import React from "react";
import Post from "./Post";

const Home = ({ posts }) => {
	return (
		<main className="home">
			{posts.length ? (
				<ul>
					{posts.map((post) => (
						<Post post={post} key={post.id} />
					))}
				</ul>
			) : (
				<p className="no-posts">No Posts To Show</p>
			)}
		</main>
	);
};

export default Home;
