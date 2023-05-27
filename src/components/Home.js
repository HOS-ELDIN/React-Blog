import React, { useContext } from "react";
import Post from "./Post";
import DataContext from "../context/DataContext";

const Home = () => {
	const { searchResults } = useContext(DataContext);
	return (
		<main className="home">
			{searchResults.length ? (
				<ul>
					{searchResults.map((post) => (
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
