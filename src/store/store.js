import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: null,
    favorites: null,
    showFavorites: false,
    heading: '',
    page: 1,
  },
});

export default store;
