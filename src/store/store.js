import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: [],
    favorites: [],
    showFavorites: false,
    heading: '',
    page: 1,
    category: 'upcoming'
  },

  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies
    },
    PAGE_NEXT(state, page) {
      state.page = page++;
    },
    PAGE_BACK(state) {
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
    fetchFilms({ commit }, { page, category }) {
      EventService.getFilmsByCategory(page, category)
      .then((response) => {
        const { results } = response.data;
        commit('SET_MOVIES', results);
      })
      .catch((err) => err);
    },

    fetchFilmsByQuery({ commit }, results) {
      commit('SET_MOVIES', results)
    },

    navigatePage({ commit }, direction) {
      direction === 'next' ? commit('PAGE_NEXT') : commit('PAGE_BACK')
    },

  },
});

export default store;