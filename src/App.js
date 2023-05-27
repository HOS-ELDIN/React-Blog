import Layout from "./components/Layout";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import EditPost from "./components/EditPost";
import About from "./components/About";
import Missing from "./components/Missing";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
	// jsx
	return (
		<DataProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* the default route for the / path */}
					<Route index element={<Home />} />

					{/* post path which has new post and post page */}
					<Route path="post">
						{/* new post route */}
						<Route index element={<NewPost />} />
						{/* post page route */}
						<Route path=":id" element={<PostPage />} />
					</Route>

					{/* edit routes */}
					<Route path="edit/:id" element={<EditPost />} />
					{/* the other routes */}
					<Route path="about" element={<About />} />
					<Route path="*" element={<Missing />} />
				</Route>
			</Routes>
		</DataProvider>
	);
}

export default App;
