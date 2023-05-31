import React, { useContext } from "react";
import Post from "./Post";
import DataContext from "../context/DataContext";
import Loading from "./Loading";

const Home = () => {
	const { searchResults } = useContext(DataContext);
	const { isLoading } = useContext(DataContext);
	return (
		<main className="home">
			{/* {true ? ( */}
			{isLoading ? (
				<Loading />
			) : searchResults.length ? (
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
