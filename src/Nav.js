import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
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
