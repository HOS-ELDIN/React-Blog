import axios from "axios";

export default axios.create({
	// baseURL: "http://localhost:3500",

	// this is the web site
	//https://jsonbin.io/app/app/api-keys
	baseURL:
		"https://api.jsonbin.io/v3/b/64720bd28e4aa6225ea51b03",
});

// npx json-server -p 3500 -w data/db.json
