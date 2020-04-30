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
    searchQuery: '',
    page: 1,
    category: 'top_rated',
    totalSearchResults: 0,
  },

  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_TOTAL_RESULTS(state, totalSearchResults) {
      state.totalSearchResults = totalSearchResults;
    },
    SET_SEARCH_QUERY(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    PAGE_NEXT(state) {
      state.page++;
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

    fetchFilmsByQuery({ commit }, response) {
      commit('SET_MOVIES', response.results)
      commit('SET_TOTAL_RESULTS', response.total_results)
    },

    navigatePage({ commit }, direction) {
      if (direction === 'forwards') {
        commit('PAGE_NEXT')
      } else if (direction === 'backwards') {
        commit('PAGE_BACK')
      }
    },
  },
});

export default store;