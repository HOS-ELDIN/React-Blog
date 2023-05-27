import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Nav = () => {
	const { search, setSearch } = useContext(DataContext);
	return (
		<nav>
			<input
				type="search"
				placeholder="Search Posts"
				onChange={(e) => setSearch(e.target.value)}
				value={search}
			/>
			<ul>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={"post"}>post</Link>
				</li>
				<li>
					<Link to={"about"}>About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
