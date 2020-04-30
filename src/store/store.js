import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: [],
    favorites: [],
    showFavorites: false,
    heading: '',
    page: 2,
  },

  mutations: {
    SAVE_MOVIES(state, movies) {
      state.movies = movies
    },
    PAGE_FORWARDS(state, page) {
      state.page = page++;
    },
    PAGE_BACKWARDS(state) {
      state.page > 0 ? state.page-- : state.page = 1;
    },
    REMOVE_FROM_LIST(state, id) {
      state.movies = state.movies.filter((el) => el.id !== id);
    },
    ADD_TO_FAVORITES(state, movie) {
      if (!state.favorites.includes(movie)) {
        state.favorites.push(movie);
      }
    },
    REMOVE_FROM_FAVORITES(state, id) {
      state.favorites = state.favorites.filter((el) => el.id !== id);
    },
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
    },
  },
});

export default store;