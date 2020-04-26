import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    favorites: [],
    showFavorites: false,
    heading: '',
    page: 1,
  },
  mutations: {
    SAVE_MOVIES(state, movies) {
      state.movies = movies
    },
    CHANGE_HEADING(state, heading) {
      state.heading = heading;
    }
  },
  actions: {
    loadMovies({ commit }, page) {
      axios
      .get(`${process.env.VUE_APP_BASE_URL}top_rated?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=${page}`)
      .then((response) => {
        const { results } = response.data;
        commit('SAVE_MOVIES', results);
      })
      .catch((err) => err);
    }
  },
  modules: {

  }
});
