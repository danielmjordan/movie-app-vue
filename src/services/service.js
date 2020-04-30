import axios from 'axios';

const apiClient = axios.create({
  baseURL: ``
})

export default {
  getTopRated(page) {
    return apiClient.get(``);
  },

  getPoster(path) {
    return apiClient.get(``);
  },

  getBackgroundImage(path) {
    return apiClient.get(``);
  }

  getSearchResults(query) {
    return apiClient.get(``);
  },

  getMovieDetail(id) {

  },

}