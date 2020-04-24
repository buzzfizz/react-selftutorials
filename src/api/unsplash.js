import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID pY4whJXG5EM4Ju4j-i5DW2ehfB0mlWErblWxgBcydkY",
	},
});
