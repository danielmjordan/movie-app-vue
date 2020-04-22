<template>
  <v-app>
    <v-container>
        <Toolbar />
        <h4>Top-Rated Films ({{ movies.length }})</h4>
        <MovieList
          :movies="movies"
          @add-to-favorites="addFavorite($event)"
          @remove-from-list="removeMovie($event)"
        />
        <h2>Favorites ({{ favorites.length }})</h2>
        <MovieList
          :movies="favorites"
          @remove-from-list="removeFromFavorites($event)"
        />
      </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
import Toolbar from './components/Toolbar.vue';
import MovieList from './components/MovieList.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
    MovieList,
  },

  data() {
    return {
      movies: null,
      showFavorites: false,
      favorites: [],
    };
  },

  methods: {
    addFavorite(movie) {
      this.favorites.push(movie);
    },
    removeMovie(id) {
      this.movies = this.movies.filter((el) => el.id !== id);
    },
    removeFromFavorites(id) {
      this.favorites = this.favorites.filter((el) => el.id !== id);
    },
  },

  mounted() {
    axios
      .get(`${process.env.VUE_APP_BASE_URL}`)
      .then((response) => {
        const { results } = response.data;
        this.movies = results;
      })
      .catch((err) => err);
  },
};
</script>
