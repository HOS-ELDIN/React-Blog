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
	const [isLoading, setIsLoading] = useState(true);

	const navigate = useNavigate();

	//use effect consts
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await api.get("/latest?meta=false", {
					headers: {
						"X-Master-Key":
							"$2b$10$8af8yHYa/LJMqrWJLC/6iu29hjtZua92yI8.vlPwWZBj/SE4kz4TO",
						"X-Access-Key":
							"$2b$10$DQz6C.Oi0RiKI0DsXfxykejGH0qpGf/dob3KYU9Xni0xBZ2dUWwEa",
						"Content-Type": "application/json",
					},
				});
				// console.log(response);
				setPosts(response.data);
				setIsLoading(false);
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
				isLoading,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
