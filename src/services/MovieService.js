import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
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
