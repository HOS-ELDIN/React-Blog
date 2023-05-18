import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
	return (
		<main>
			<h2>Page Not Found</h2>
			<p>Well, That's disappointing.</p>
			<p>
				<Link className="home-link" to="/">
					Visit Our Homepage
				</Link>
			</p>
		</main>
	);
};

export default Missing;
