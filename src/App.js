import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { format } from "date-fns";

function App() {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "1st post",
			datetime: "july 30,2023 06:50:30 PM",
			body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, hic. Ea unde saepe, vitae quasi ipsa, eligendi quo omnis ex reprehenderit iure a",
		},
		{
			id: 2,
			title: "2nd post",
			datetime: "july 30,2023 06:50:30 PM",
			body: "hosam, ipsum dolor sit amet consectetur adipisicing elit. Sequi, hic. Ea unde saepe, vitae quasi ipsa, eligendi quo omnis ex reprehenderit iure a",
		},
		{
			id: 3,
			title: "3rd post",
			datetime: "july 30,2023 06:50:30 PM",
			body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, hic. Ea unde saepe, vitae quasi ipsa, eligendi quo omnis ex reprehenderit iure a",
		},
		{
			id: 4,
			title: "4th post",
			datetime: "july 30,2023 06:50:30 PM",
			body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, hic. Ea unde saepe, vitae quasi ipsa, eligendi quo omnis ex reprehenderit iure a",
		},
		{
			id: 5,
			title: "5th post",
			datetime: "july 30,2023 06:50:30 PM",
			body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, hic. Ea unde saepe, vitae quasi ipsa, eligendi quo omnis ex reprehenderit iure a",
		},
	]);

	const [search, setSearch] = useState("");
	const [newPostTitle, setNewPostTitle] = useState("");
	const [newPostBody, setNewPostBody] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const filteredPosts = posts.filter(
			(post) =>
				post.title.toLowerCase().includes(search.toLowerCase()) ||
				post.body.toLowerCase().includes(search.toLowerCase())
		);

		setSearchResults(filteredPosts.reverse());
	}, [posts, search]);

	const navigate = useNavigate();

	const handleDelete = (id) => {
		const newPosts = posts.filter((post) => post.id !== id);
		setPosts(newPosts);
		navigate("/");
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const newPostId = posts.length ? posts[posts.length - 1].id + 1 : 1;

		const newPostDateTime = format(new Date(), "MMMM dd, yyyy pp");
		// const newPostDateTime = "";
		const newPost = {
			id: newPostId,
			title: newPostTitle,
			datetime: newPostDateTime,
			body: newPostBody,
		};
		const newPostsList = [...posts, newPost];
		setPosts(newPostsList);
		setNewPostTitle("");
		setNewPostBody("");
		navigate(`/post/${newPostId}`);
		// console.log(newPostsList);
	};
	
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout search={search} setSearch={setSearch} />}
			>
				<Route index element={<Home posts={searchResults} />} />

				<Route path="post">
					<Route
						index
						element={
							<NewPost
								setNewPostTitle={setNewPostTitle}
								setNewPostBody={setNewPostBody}
								newPostTitle={newPostTitle}
								newPostBody={newPostBody}
								handleSubmit={handleSubmit}
							/>
						}
					/>
					<Route
						path=":id"
						element={<PostPage posts={posts} handleDelete={handleDelete} />}
					/>
				</Route>

				<Route path="about" element={<About />} />
				<Route path="*" element={<Missing />} />
			</Route>
		</Routes>
	);
}

export default App;
