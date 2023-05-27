import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "../api/posts";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	// use state const
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const navigate = useNavigate();

	//use effect consts
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const reponse = await api.get("/posts");
				setPosts(reponse.data);
			} catch (err) {
				console.log(err.reponse.data);
				console.log(err.reponse.this.status);
				console.log(err.reponse.header);
			}
		};
		fetchPosts();
	}, []);
	useEffect(() => {
		const filteredPosts = posts.filter(
			(post) =>
				post.title.toLowerCase().includes(search.toLowerCase()) ||
				post.body.toLowerCase().includes(search.toLowerCase())
		);

		setSearchResults(filteredPosts.reverse());
	}, [posts, search]);

	// handle functions

	return (
		<DataContext.Provider
			value={{
				search,
				setSearch,
				searchResults,
				posts,
				setPosts,
				format,
				api,
				navigate,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
