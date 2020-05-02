import axios from "axios";
import Nprogress from "nprogress";

const apiClient = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

apiClient.interceptors.request.use((config) => {
	Nprogress.start();
	return config;
});

apiClient.interceptors.response.use((response) => {
	Nprogress.done();
	return response;
});

export default {
	getFilmsByCategory(page, category) {
		return apiClient.get(
			`/movie/${category}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=${page}`
		);
	},

	getFilmsBySearchQuery(query) {
		return apiClient.get(
			`/search/movie?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=1&query=${query}`
		);
	},
};
