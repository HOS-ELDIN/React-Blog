import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				{/* we put the * here to let it know we have a o==uts inside */}
				<Route path="/*" element={<App />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
